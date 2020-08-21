import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import {User} from "./User";

@ObjectType()
@Entity()
export class Chat extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => User)
  @ManyToOne(() => User)
  owner!: User;

  @OneToOne(() => User)
  contact: User;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;
}
