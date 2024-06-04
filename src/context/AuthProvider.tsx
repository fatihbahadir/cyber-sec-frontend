import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type AuthProviderProps = {
  children?: ReactNode;
};

type IAuth = {
  accessToken: string;
  user: string;
};

interface AuthContextInterface {
  auth: IAuth;
  setAuth: Dispatch<SetStateAction<IAuth>>;
}

const AuthContext = createContext<AuthContextInterface>({
  auth: {
    user: "",
    accessToken: "",
  },
  setAuth: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<IAuth>({
    user: "",
    accessToken: "",
  });
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
