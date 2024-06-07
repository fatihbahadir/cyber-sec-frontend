import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
  } from "react";
  
  type EmailProviderProps = {
    children?: ReactNode;
  };
  
  interface EmailContextInterface {
    emails: any[];
    setEmails: Dispatch<SetStateAction<any[]>>;
  }
  
  const EmailContext = createContext<EmailContextInterface>({
    emails: [],
    setEmails: () => {},
  });
  
  export const EmailProvider = ({ children }: EmailProviderProps) => {
    const [emails, setEmails] = useState<any[]>([]);
  
    return (
      <EmailContext.Provider value={{ emails, setEmails }}>
        {children}
      </EmailContext.Provider>
    );
  };
  
  export default EmailContext;
  