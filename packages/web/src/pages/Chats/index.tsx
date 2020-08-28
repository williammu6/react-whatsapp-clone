import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React, {useContext, useState} from "react";
import Composer from "../../components/Composer";
import Messages from "../../components/Messages";
import { avatarImage } from "../../constants";
import {userContext} from "../../contexts/user";
import { ChatType } from "../../types/chat";
import {socket} from "../../utils/socket";

const GET_CHATS = gql`
  query GetChats {
    getChats {
      id
      participants {
        username
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

const Chat = ({ chat, onClickEvent }: { chat: ChatType, onClickEvent: any }) => {
  const getLastMessage = (chat: ChatType) => {
    if (chat.messages && chat.messages.length) {
      return chat.messages[chat.messages.length - 1].text;
    }
    return null;
  };

  const getUser = (chat: ChatType) => chat.participants![0];

  return (
    <div onClick={onClickEvent} className="flex items-center justify-evenly bg-gray-100 h-16 border-b border-r border-gray-600 p-2 hover:bg-gray-300 cursor-pointer">
      <img src={avatarImage} alt="avatar" className="w-12 h-12" />
      <div className="flex flex-col ml-4 justify-around h-full flex-1">
        <span className="font-semibold text-gray-700 truncate">
          {getUser(chat).username}
        </span>
        <span className="text-sm text-gray-600 truncate">
          {getLastMessage(chat)}
        </span>
      </div>
      <span className="text-xs text-gray-600">Yesterday</span>
    </div>
  );
};

const Chats = () => {

  const [connected, setConnected] = useState<boolean>(false);
  const [currentChat, setCurrentChat] = useState<ChatType | null>(null);

  const { data, loading, error } = useQuery(GET_CHATS);

  const currentUser = useContext(userContext);


  if (!connected && !loading) {
    socket.emit("join", { userId: currentUser.id, chats: data.getChats });
    socket.on("connected", () => setConnected(true));
  }


  socket.on("disconnected", () => setConnected(false));


  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>ERROR</h1>;

  return (
    <div className="flex h-screen w-screen">
      <div className="w-4/12 bg-gray-300 h-full shadow">
        <ChatsHeader />
        {data.getChats &&
          data.getChats.map((chat: any) => <Chat onClickEvent={() => setCurrentChat(chat)} key={chat.id} chat={chat} />)}
      </div>
      <div className="flex flex-col flex-1 bg-gray-800">
        { currentChat && (
          <div className="flex flex-col flex-1">
            <Messages chat={currentChat} />
            <Composer chat={currentChat} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Chats;
