import axiosCustom, { axiosPrivate } from "../services/api";
import useAuth from "./useAuth";

const useRefreshToken = () => {
    const {auth, setAuth} = useAuth();

    const refresh = async() => {
        const response = await axiosCustom.get('/refresh', {
            withCredentials: true
          });

        setAuth(prev => {
            return {
                ...prev,
                accessToken: response.data.accessToken
            }
        });
        return response.data.accessToken;
    }

    return refresh
}

export default useRefreshToken;