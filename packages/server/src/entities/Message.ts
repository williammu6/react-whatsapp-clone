import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Chat } from "./Chat";
import { User } from "./User";

@ObjectType()
@Entity()
export class Message extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Chat)
  chat: Chat;

  @ManyToOne(() => User)
  sender!: User;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;
}
