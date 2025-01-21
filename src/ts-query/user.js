import { globalState } from "./state";

const userObj = {
  id: 1,
  name: "Mr. Khan",
  email: "user@example.com",
  isActive: false,
};
export const useUserState = globalState("user", userObj);
