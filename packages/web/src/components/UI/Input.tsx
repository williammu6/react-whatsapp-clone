import React from "react";

const Input = (props: any) => {
  return (
    <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
      { ...props }
    />
  );
};

export default Input;
