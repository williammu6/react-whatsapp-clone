import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React, { useContext } from "react";
import { ChatType } from "../../types/chat";
import { MessageType } from "../../types/message";
import clsx from "clsx";
import { userContext } from "../../contexts/user";
import { UserType } from "../../types/user";

export const CHAT_DETAILS = gql`
  query ChatDetails($chatId: Float!) {
    chatDetails(chatId: $chatId) {
      id
      messages {
        id
        text
        createdAt
        sender {
          id
          username
        }
      }
    }
  }
`;

const Messages = ({ chat }: { chat: ChatType }) => {
  const { data, loading, error } = useQuery(CHAT_DETAILS, {
    variables: { chatId: chat.id }
  });

  const currentUser = useContext(userContext);

  const isSenderMe = (sender: UserType) => {
    return sender.username === currentUser.username;
  };

  return (
    <div className="flex flex-col-reverse flex-1 bg-gray-800">
      {!loading &&
        !error &&
        data.chatDetails.messages.map((message: MessageType) => (
          <div
            key={message.id}
            className={clsx(
              "flex items-center content-center w-fit h-fit px-4 py-1 ml-24 mr-24 mb-2 rounded text-gray-100",
                isSenderMe(message.sender)
                ? "self-end bg-blue-700 flex-row"
                : "self-start bg-indigo-700 flex-row-reverse"
            )}
          >
            <span className="text-gray-100">{message.text}</span>
            <span
              className={clsx(
                "text-xs text-gray-400",
                isSenderMe(message.sender) ? "self-end ml-4" : "self-start mr-4"
              )}
            >
              10:23
            </span>
          </div>
        ))}
    </div>
  );
};

export default Messages;
