import { Chat } from "../entities/Chat";
import { User } from "../entities/User";
import { Mutation, Query } from "type-graphql";

export class ChatResolver {
  @Query(() => [Chat])
  async getChats() {
    return await Chat.find();
  }

  @Mutation(() => Chat)
  async save(): Promise<Chat> {
    const users = await User.find();
    // This is dummy for now
    const owner = users[0];
    const contact = users[1];

    console.log(owner, contact);

    const chat = Chat.create({
      owner,
      contact
    });

    owner.chats.push(chat);

    await owner.save();

    return chat;
  }
}
