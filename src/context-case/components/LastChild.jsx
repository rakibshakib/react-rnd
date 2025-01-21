import { useContext } from "react";
import { UserContext } from "..";

const LastChild = () => {
  const user = useContext(UserContext);
  return <div>{user.name}</div>;
};

export default LastChild;
