import { MessageType } from "./message";
import { UserType } from "./user";

export type ChatType = {
  id: number;
  participants?: UserType[];
  messages?: MessageType[];
};
