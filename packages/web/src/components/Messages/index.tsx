import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import { ChatType } from "../../types/chat";
import { MessageType } from "../../types/message";
import clsx from "clsx";

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

  return (
    <div className="flex flex-col-reverse flex-1 bg-gray-800">
      {!loading &&
        !error &&
        data.chatDetails.messages.map((message: MessageType) => (
          <div
            key={message.id}
            className={clsx(
              "flex items-center content-center w-fit h-fit px-4 py-1 ml-24 mr-24 mb-2 rounded text-gray-100",
              message.id & 1
                ? "self-start bg-indigo-700 flex-row-reverse"
                : "self-end bg-blue-700 flex-row"
            )}
          >
            <span className="text-gray-100">{message.text}</span>
            <span
              className={clsx(
                "text-xs text-gray-400",
                message.id & 1 ? "self-start mr-4" : "self-end ml-4"
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
