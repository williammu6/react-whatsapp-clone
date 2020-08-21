import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { Chat } from "./Chat";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ unique: true })
  username!: string;

  @OneToMany(
    () => Chat,
    (chat: Chat) => chat.owner,
    {
      cascade: true
    }
  )
  chats!: Chat[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;
}
