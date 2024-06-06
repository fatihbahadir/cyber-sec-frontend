import axios from "../services/api";
import useAuth from "./useAuth";

const useLogout = () => {
    const { auth, setAuth } = useAuth();

    const logout = async() => {
        try {
            const response = await axios.get('/logout');
              setAuth({
                user: "",
                accessToken: ""
              });
        } 
        catch (err) {
            console.error(err);
        }
    }

    return logout;
}

export default useLogout;