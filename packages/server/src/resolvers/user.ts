import { User } from "../entities/User";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver(User)
export class UserResolver {
  @Mutation(() => User)
  async register(@Arg("username") username: string): Promise<User> {
    return await User.create({
      username
    }).save();
  }


  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return await User.find({ relations: ["chats"] });
  }
}
