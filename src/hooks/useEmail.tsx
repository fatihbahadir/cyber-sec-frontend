import { useContext } from "react";
import EmailContext from "../context/EmailProvider";

const useEmail = () => {
    return useContext(EmailContext);
}

export default useEmail;