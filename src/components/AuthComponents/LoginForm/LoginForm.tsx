import { PiLockBold, PiUserBold } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";
import useInput from "../../../hooks/useInput";
import { ChangeEvent, MouseEvent, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useToggle from "../../../hooks/useToggle";
import AuthInput from "../AuthInput/AuthInput";
import Button from "../Button/Button";
import { toast } from "react-toastify";
import axios from "../../../services/api";

const LOGIN_URL = "/auth";

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [user, resetUser, userAttribs] = useInput("user", "");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [check, toggleCheck] = useToggle("persist", false);
  const { auth, setAuth } = useAuth();


  const handleLogin = async (e : MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    if (user.length < 1) {
      toast.error("Please enter a valid username!");
      setLoading(false);
      return;
    }
    if (pwd.trim() === "") {
      toast.error("Please enter a password!");
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post(
        LOGIN_URL,
        {
          user: user,
          pwd: pwd,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      const accessToken = response?.data?.accessToken;
      setAuth({ user, accessToken });
      console.log("Auth", auth);
      
      setLoading(false);      
      navigate(from, { replace: true });
    } catch (err) {
      toast.error("Username or password is wrong");
      resetUser();
      setPwd("");
      setLoading(false);
    }
  };

  return (
    <>
      <AuthInput
        inputAttribs={{
          id: "user",
          type: "text",
          placeholder: "Username",
          ...userAttribs,
        }}
        isLoginInput={true}
        Icon={PiUserBold}
      />
      <AuthInput
        inputAttribs={{
          id: "password",
          type: "password",
          placeholder: "Password",
          value: pwd,
          onChange: (e : ChangeEvent<HTMLInputElement>) => setPwd(e.target.value),
        }}
        isLoginInput={true}
        Icon={PiLockBold}
      />
      
      <div className="flex items-center justify-between">
        <label htmlFor="persist" className="flex items-center text-xs sm:text-sm">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600"
            onChange={toggleCheck}
            checked={check}
            id="persist"
          />
          <span className="ml-2 text-white">Remember me</span>
        </label>
      
      </div>

      <Button
        onClick={handleLogin}
        loading={loading}
        text="Login"
      />
    </>
  );
};

export default LoginForm;
