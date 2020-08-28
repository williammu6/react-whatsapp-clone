import React from "react";
import { UserType } from "../types/user";

const userContext = React.createContext<Partial<UserType>>({});

export { userContext };
