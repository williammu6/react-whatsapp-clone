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
class UserInput {
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
    @Ctx() { req }: MyContext
  ): Promise<User> {
    const hashedPassword = await argon2.hash(data.password);

    const user = await User.create({
      username: data.username,
      password: hashedPassword
    }).save();

    req.session.userId = user.id;

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
      throw new Error("wrong password");

    req.session.userId = user.id;

    return user;
  }

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return await User.find({ relations: ["chats"] });
  }

  @Query(() => User)
  async me(@Ctx() { req }: MyContext): Promise<User> {
    const userId= req.session.userId;
    if (!userId)
      throw new Error("Not logged in");

    const user = await User.findOne(userId);

    return user!;
  }
}
