import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { Message } from "./Message";
import { User } from "./User";

@ObjectType()
@Entity()
export class Chat extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => User, { nullable: false })
  @ManyToOne(
    () => User,
    (user: User) => user.chats
  )
  owner!: User;

  @Field(() => User, { nullable: false })
  @ManyToOne(
    () => User,
    (user: User) => user.chats
  )
  to!: User;

  @Field(() => [Message])
  @OneToMany(
    () => Message,
    (message: Message) => message.chat,
    {
      cascade: true
    }
  )
  messages: Message[];
}
