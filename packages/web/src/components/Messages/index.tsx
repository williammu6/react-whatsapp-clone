import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React, { useEffect } from "react";
import { ChatType } from "../../types/chat";
import { MessageType } from "../../types/message";

type MessageProps = {
  chat: ChatType;
  children?: React.ReactNode;
};

const CHAT_DETAILS = gql`
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

const Messages = ({ chat }: MessageProps) => {
  const { data, loading, error } = useQuery(CHAT_DETAILS, {
    variables: { chatId: chat.id }
  });

  if (loading) return null;
  if (error) return <h1>ERROR...</h1>;

  return (
    <div className="flex flex-col-reverse flex-1">
      {data.chatDetails.messages.map((message: MessageType) => (
        <div key={message.id} className="flex items-center content-center px-4 py-4 bg-gray-100 border-t border-gray-500 text-gray-900 font-bold">
          <span>{message.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Messages;
