import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { Outlet } from "react-router-dom";
import useRefreshToken from "../../../hooks/useRefreshToken";
import Loading from "../../CommonComponents/Loading/Loading";

const PersistLogin = () => {
  const [ loading, setLoading ] = useState(true);
  const refresh = useRefreshToken();
  const { auth } = useAuth();
  const [persist] = useLocalStorage("persist", false);

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        isMounted && setLoading(false);
      }
    };

    !auth?.accessToken ? verifyRefreshToken() : setLoading(false);

    return () => {isMounted = false}  }
    , []);

  return (
    <>{!persist ? <Outlet /> : loading ?  <div className="w-screen h-screen  bg-main flex items-center justify-center">
         <Loading/>
    </div> : <Outlet />}</>
  );
};

export default PersistLogin;