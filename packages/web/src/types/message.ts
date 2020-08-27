import { UserType } from "./user";

export type MessageType = {
  id: number;
  text: string;
  createdAt: string;
  sender: UserType;
};
