import { gql, useMutation } from "@apollo/client";
import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";

const REGISTER = gql`
  mutation Register($data: UserInput!) {
    register(data: $data) {
      id
      username
      createdAt
    }
  }
`;

export const Register = () => {
  const history = useHistory();

  const [register] = useMutation(REGISTER);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password")
    };

    const response = await register({ variables: { data } });

    if (response.data.login) {
      history.push("/chats");
    }
  };

  return (
    <div className="flex items-center content-center justify-center w-full h-full">
      <form
        onSubmit={onSubmit}
        className="flex flex-col justify-between w-56 h-32"
      >
        <Input
          type="text"
          name="username"
          placeholder="Username"
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
        />
        <Button
          type="submit"
        >
          Register
        </Button>
      </form>
    </div>
  );
};
