import React, { useState } from "react";
import clsx from "clsx";
import { Login } from "../../components/Login";
import { Register } from "../../components/Register";

const Home = () => {
  const [current, setCurrent] = useState("register");

  return (
    <div className="flex flex-col w-full h-full justify-center items-center ">
      <div className="w-56 h-64">
        <div className="flex h-8 w-full border border-2 border-gray-400  justify-between">
          <button
            onClick={() => setCurrent("register")}
            className={clsx(
              "w-full transition duration-200 ease-in-out",
              current === "register" && "bg-indigo-200"
            )}
          >
            Register
          </button>
          <button
            onClick={() => setCurrent("login")}
            className={clsx(
              "w-full transition duration-200 ease-in-out",
              current === "login" && "bg-indigo-200"
            )}
          >
            Login
          </button>
        </div>

        <div className="flex bg-gray-300 items-center rounded p-8">
          {current === "login" ? <Login /> : <Register />}
        </div>
      </div>
    </div>
  );
};

export default Home;
