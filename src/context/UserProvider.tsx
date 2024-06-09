import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
  } from "react";
  
  type UserProviderProps = {
    children?: ReactNode;
  };
  
  interface UserContextInterface {
    user: {
      username: string;
      roles: Record<string, unknown>;
    };
    setUser: Dispatch<SetStateAction<{
      username: string;
      roles: Record<string, unknown>;
    }>>;
  }
  
  const UserContext = createContext<UserContextInterface>({
    user: {
      username: "",
      roles: {}
    },
    setUser: () => {},
  });
  
  export const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState({
      username: "",
      roles: {}
    });
  
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export default UserContext;
  