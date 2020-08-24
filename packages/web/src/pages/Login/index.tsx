import { gql, useMutation } from "@apollo/client";
import React from "react";

const LOGIN = gql`
  mutation Login($data: UserInput!) {
    login(data: $data) {
      id
      username
      createdAt
    }
  }
`;

const LOGOUT = gql`
  mutation Logout {
    logout
  }
`;

export const Login = () => {
  const [login] = useMutation(LOGIN);
  const [logout] = useMutation(LOGOUT);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password")
    };

    const response = await login({ variables: { data }} );

    console.log(response);
  };

  const logggout = async () => {
    await logout();
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
      <button onClick={logggout}>Logout</button>
    </div>
  );
};
