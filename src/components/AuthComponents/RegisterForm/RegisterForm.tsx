import React, { ChangeEvent, useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../../../services/api";
import AuthInput from "../AuthInput/AuthInput";
import Button from "../Button/Button";

const REGISTER_URL = "/register";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState({
    user: "",
    pwd: "",
  });

  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!registerForm.user) {
      toast.error("Username can not be empty!");
      setLoading(false);
      return;
    }

    if (!registerForm.pwd) {
      toast.error("Password can not be empty!");
      setLoading(false);
      return;
    }

    setRegisterForm({
      user: "",
      pwd: "",
    });

    try {
      const response = await axios.post(REGISTER_URL, registerForm, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setLoading(false);
      toast.success("Registered succesfully!");
      navigate("/login");
    } catch (err) {
      toast.error("An error occured please try again !");
      setRegisterForm({
        user: "",
        pwd: "",
      });
      setLoading(false);
    }
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  };

  return (
    <>
          <AuthInput
          inputAttribs={{
            name: "user",
            id: "user",
            type: "text",
            placeholder: "Username",
            value: registerForm.user,
            onChange: handleInputChange,
          }}
          isLoginInput={false}
          />
          <AuthInput
          inputAttribs={{
            name: "pwd",
            id: "pwd",
            type: "password",
            placeholder: "Password",
            value: registerForm.pwd,
            onChange: handleInputChange,
          }}
          isLoginInput={false}
        />


        <Button
        onClick={handleRegister}
        loading={loading}
        text="Register"
      />

    </>
  );
};

export default RegisterForm;
