import { Chat } from "../entities/Chat";
import { User } from "../entities/User";
import { Arg, Ctx, Mutation, Query } from "type-graphql";
import { Message } from "../entities/Message";
import { MyContext } from "src/types";

export class ChatResolver {
  @Query(() => [Message])
  async getMessages(@Arg("chatId") chatId: number): Promise<Message[]> {
    return await Message.find({
      where: { chat: chatId },
      relations: ["sender"]
    });
  }

  @Query(() => [Chat], { nullable: true })
  async getChats(@Ctx() { req }: MyContext): Promise<Chat[] | null> {
    const user = await User.findOne(req.session.userId);

    if (!user) return null;

    const myChats = await user.chats;

    const chatsIds = myChats.map((chat: Chat) => chat.id);

    const username = user.username;

    const chats = await Chat.createQueryBuilder("chat")
      .innerJoinAndSelect("chat.participants", "participants")
      .where("chat.id IN (:...chatsIds)", { chatsIds })
      .andWhere("participants.username != :username", { username })
      .getMany();

    return chats;
  }

  @Query(() => Chat, { nullable: false })
  async chatDetails(@Arg("chatId") chatId: number): Promise<Chat> {
    const chat = await Chat.createQueryBuilder("chat")
      .leftJoinAndSelect("chat.messages", "messages")
      .leftJoinAndSelect("messages.sender", "sender")
      .where("chat.id = :chatId", { chatId })
      .orderBy("messages.createdAt", "DESC")
      .getOne();
    return chat!;
  }

  @Mutation(() => Chat, { nullable: true })
  async createChat(
    @Arg("username") username: string,
    @Ctx() { req }: MyContext
  ): Promise<Chat | null> {
    const me = await User.findOne(req.session.userId);

    if (!me) return null;

    const contact = await User.findOne({ username });

    if (!contact) return null;

    const chat = await Chat.create({
      participants: [me, contact]
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
