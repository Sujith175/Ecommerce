import { createContext } from "react";

export const userContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  return <userContext.Provider>{children}</userContext.Provider>;
};
