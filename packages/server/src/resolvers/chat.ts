import { Chat } from "../entities/Chat";
import { User } from "../entities/User";
import { Arg, Mutation, Query } from "type-graphql";
import { Message } from "../entities/Message";

export class ChatResolver {
  @Query(() => [Chat])
  async getChats() {
    return await Chat.find({ relations: ["owner", "to"] });
  }

  @Query(() => [Message])
  async getMessages(@Arg("chatId") chatId: number): Promise<Message[]> {
    return await Message.find({ where: { chat: chatId },
    relations: ["sender"]});
  }

  @Mutation(() => Chat)
  async save(): Promise<Chat> {
    const users = await User.find();

    if (users.length < 2) throw new Error("no user");
    // This is dummy for now
    const owner = users[0];
    const contact = users[1];

    console.log(owner, contact);

    const chat = await Chat.create({
      owner: owner,
      to: contact
    }).save();

    return chat;
  }

  @Mutation(() => Message)
  async sendMessage(
    @Arg("chatId") chatId: number,
    @Arg("text") text: string
  ): Promise<Message> {
    const chat = await Chat.findOne(chatId);

    const users = await User.find();

    const sender = users[0];

    if (!chat) throw new Error("Chat not found");

    const message = await Message.create({
      sender,
      chat,
      text
    }).save();

    return message;
  }
}
