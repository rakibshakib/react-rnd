"use client";
import { createContext, useState } from "react";
import Parent from "./components/Parent";

export const UserContext = createContext();
const UsingContext = () => {
  const [user, setUser] = useState({
    id: 1,
    name: "John Doe",
    email: "qY9Cf@example.com",
    isActive: false,
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Parent />
    </UserContext.Provider>
  );
};

export default UsingContext;
