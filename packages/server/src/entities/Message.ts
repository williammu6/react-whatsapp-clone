import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
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

  @Column()
  @Field(() => String)
  text: string;

  @ManyToOne(() => Chat)
  chat: Chat;

  @Field(() => User)
  @ManyToOne(() => User)
  sender: User;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;
}
