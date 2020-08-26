import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import Composer from "../../components/Composer";
import Messages from "../../components/Messages";
import { avatarImage } from "../../constants";

const GET_CHATS = gql`
  query GetChats {
    getChats {
      id
      participants {
        username
      }
      messages {
        text
        createdAt
      }
    }
  }
`;

const ChatsHeader = () => {
  return (
    <div className="flex h-20 items-center justify-start p-4 bg-gray-700 border-b border-r border-gray-800 text-gray-100">
      <img src={avatarImage} alt="avatar" className="w-20 h-20 mr-4 py-2" />
    </div>
  );
};

const Chat = ({ chat }: { chat: any }) => {

  const getLastMessage = (chat: any) => {
    if (chat.messages.length) {
      return chat.messages[chat.messages.length - 1].text;
    }
    return null;
  };

  return (
    <div className="flex items-center justify-evenly bg-gray-100 h-16 border-b border-r border-gray-600 p-2">
      <img src={avatarImage} alt="avatar" className="w-12 h-12"/>
      <div className="flex flex-col ml-4 justify-around h-full flex-1">
        <span className="font-semibold text-gray-700 truncate">{ chat.participants[0].username }</span>
        <span className="text-sm text-gray-600 truncate">{ getLastMessage(chat) }</span>
      </div>
      <span className="text-xs text-gray-600">Yesterday</span>
    </div>
  );
};

const Chats = () => {
  const { data, loading, error } = useQuery(GET_CHATS);

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>ERROR</h1>;

  return (
    <div className="flex h-screen w-screen">
      <div className="w-4/12 bg-gray-300 h-full">
        <ChatsHeader />
        {data.getChats &&
          data.getChats.map((chat: any) => <Chat key={chat.id} chat={chat} />)}
      </div>
      <div className="flex flex-col flex-1">
        <Messages />
        <Composer />
      </div>
    </div>
  );
};

export default Chats;
