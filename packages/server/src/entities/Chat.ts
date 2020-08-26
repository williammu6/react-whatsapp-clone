import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToMany,
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

  @Field(() => [User], { nullable: false })
  @ManyToMany(() => User, (user: User) => user.chats)
  participants: User[];

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
