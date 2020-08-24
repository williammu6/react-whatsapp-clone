import { User } from "../entities/User";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver
} from "type-graphql";
import { MyContext } from "src/types";
import argon2 from "argon2";

@InputType()
export class UserInput {
  @Field()
  username: string;

  @Field()
  password: string;
}

@Resolver(User)
export class UserResolver {
  @Mutation(() => User)
  async register(
    @Arg("data") data: UserInput,
  ): Promise<User> {
    const hashedPassword = await argon2.hash(data.password);

    const user = await User.create({
      username: data.username,
      password: hashedPassword
    }).save();

    return user;
  }

  @Mutation(() => User, { nullable: true })
  async login(
    @Arg("data") data: UserInput,
    @Ctx() { req }: MyContext
  ): Promise<User | null> {
    const user = await User.findOne({ where: { username: data.username } });

    if (!user) return null;

    const isValid = await argon2.verify(user.password, data.password);

    if (!isValid)
      return null;

    req.session.userId = user.id;
    console.log(req.session);

    return user;
  }

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext): Promise<Boolean> {
    return new Promise((resolve, reject) => {
      req.session.destroy(err => {
        if (err) {
          console.log(err);
          return reject(false);
        }
        res.clearCookie("qid");
        return resolve(true);
      });
    });
  }

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return await User.find({ relations: ["chats"] });
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() { req }: MyContext) {
    const userId = req.session.userId;

    if (!userId)
      return null;

    return await User.findOne(userId);
 }
}
