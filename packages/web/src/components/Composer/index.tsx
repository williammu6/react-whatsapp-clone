import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import { FiSend } from "react-icons/fi";

const SEND_MESSAGE = gql`
  mutation SendMessage($text: String!, $chatId: Float!) {
    sendMessage(text: $text, chatId: $chatId) {
      id
      text
    }
  }
`;

const Composer = () => {
  const [sendMessage] = useMutation(SEND_MESSAGE);

  const onSubmit = (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const text = formData.get("text");

    console.log(text);

    const data = {
      text,
      chatId: 1
    };

    sendMessage({ variables: data });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-100 h-12 bg-gray-400 content-around items-center justify-center"
    >
      <input
        className="flex-1 h-8 mx-2 p-2 bg-gray-100 rounded"
        name="text"
        type="text"
        placeholder="Type a message"
      />
      <button type="submit" className="text-xl w-8 hover:text-indigo-700">
        <FiSend></FiSend>
      </button>
    </form>
  );
};

export default Composer;
