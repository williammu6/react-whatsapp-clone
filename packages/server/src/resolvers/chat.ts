import { Chat } from "../entities/Chat";
import { User } from "../entities/User";
import { Arg, Ctx, Mutation, Query } from "type-graphql";
import { Message } from "../entities/Message";
import { MyContext } from "src/types";

export class ChatResolver {
  @Query(() => [Chat])
  async getChats() {
    return await Chat.find({ relations: ["owner", "to"] });
  }

  @Query(() => [Message])
  async getMessages(@Arg("chatId") chatId: number): Promise<Message[]> {
    return await Message.find({
      where: { chat: chatId },
      relations: ["sender"]
    });
  }

  @Mutation(() => Chat)
  async createChat(
    @Arg("contactId") contactId: number,
    @Ctx() { req }: MyContext
  ): Promise<Chat> {

    console.log(req.session.userId);
    const owner = await User.findOne(req.session.userId);
    const contact = await User.findOne(contactId);

    if (!contact) throw new Error("contact not found");

    const chat = await Chat.create({
      owner: owner,
      to: contact
    }).save();

    return chat;
  }

  @Mutation(() => Message)
  async sendMessage(
    @Ctx() { req }: MyContext,
    @Arg("chatId") chatId: number,
    @Arg("text") text: string
  ): Promise<Message> {
    const chat = await Chat.findOne(chatId);

    if (!chat) throw new Error("Chat not found");

    const sender = await User.findOne(req.session.userId);

    const message = await Message.create({
      sender,
      chat,
      text
    }).save();

    return message;
  }
}
