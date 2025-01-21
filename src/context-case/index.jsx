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
      <div className="border border-white m-5">
        <p className="text-xs text-white text-center font-semibold py-4">
          Using Context
        </p>
        <Parent />
      </div>
    </UserContext.Provider>
  );
};

export default UsingContext;
