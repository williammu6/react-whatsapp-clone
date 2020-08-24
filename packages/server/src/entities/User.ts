import {MinLength} from "class-validator";
import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import {Chat} from "./Chat";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ unique: true })
  @MinLength(4)
  username!: string;

  @MinLength(3)
  @Column()
  password!: string;

  @Field(() => [Chat], { nullable: true })
  @OneToMany(() => Chat, (chat) => chat.owner)
  chats: Chat[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;
}
