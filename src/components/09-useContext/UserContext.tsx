import { createContext, Dispatch, SetStateAction } from "react";

export interface User {
  id?: number;
  name?: string;
  email?: string;
}

export interface Context {

  user?: User;
  setUser?: Dispatch<SetStateAction<User>>;

}

let some: Context = {};

export const UserContext = createContext(some);