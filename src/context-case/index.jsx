"use client";
import { createContext } from "react";
import Parent from "./components/Parent";

export const UserContext = createContext();
const UsingContext = () => {
  const user = {
    id: 1,
    name: "John Doe",
    email: "qY9Cf@example.com",
  };
  return (
    <UserContext.Provider value={user}>
      <Parent />
    </UserContext.Provider>
  );
};

export default UsingContext;
