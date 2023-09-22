// AuthContext.js
import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "../../types/login";

interface GlobalContextState {
  userDetails?: User;
}

interface GlobalContextFunctions {
  login: (user: User) => void;
  logout: () => void;
}

type GlobalContextType = GlobalContextState & Partial<GlobalContextFunctions>;
const initialState = {};

const GlobalContext = createContext<GlobalContextType>(initialState);
interface GlobalProviderProps {
  children: ReactNode;
}
export function GlobalProvider({ children }: GlobalProviderProps) {
  const [userDetails, setUserDetails] = useState<User>();

  const login = (user: User) => {
    setUserDetails(user);
  };

  const logout = () => {
    // Implement your logout logic here.
    // Set isLoggedIn to false.
    setUserDetails(undefined);
  };

  return (
    <GlobalContext.Provider value={{ userDetails, login, logout }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
