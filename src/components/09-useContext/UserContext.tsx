import { createContext, Dispatch, SetStateAction } from "react";

interface User {
  id?: number;
  name?: string;
  email?: string;
}

interface Context {

  user?: User;
  setUser?: Dispatch<SetStateAction<User>>;

}

let some: Context = {};

export const UserContext = createContext(some);