import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
  } from "react";
  
  type LogProviderProps = {
    children?: ReactNode;
  };
  
  interface LogContextInterface {
    logs: any[];
    setLogs: Dispatch<SetStateAction<any[]>>;
  }
  
  const LogContext = createContext<LogContextInterface>({
    logs: [],
    setLogs: () => {},
  });
  
  export const LogProvider = ({ children }: LogProviderProps) => {
    const [logs, setLogs] = useState<any[]>([]);
  
    return (
      <LogContext.Provider value={{ logs, setLogs }}>
        {children}
      </LogContext.Provider>
    );
  };
  
  export default LogContext;
  