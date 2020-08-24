import { gql, useMutation } from "@apollo/client";
import React from "react";
import { useHistory } from "react-router-dom";

const LOGIN = gql`
  mutation Login($data: UserInput!) {
    login(data: $data) {
      id
      username
      createdAt
    }
  }
`;

export const Login = () => {
  const history = useHistory();

  const [login] = useMutation(LOGIN);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password")
    };

    const response = await login({ variables: { data } });

    if (response.data) {
      history.push("/");
    }
  };

  return (
    <div className="flex items-center content-center justify-center w-full h-full">
      <form
        onSubmit={onSubmit}
        className="flex flex-col justify-between w-56 h-32"
      >
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};
