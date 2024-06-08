import React from "react";
import FormBottom from "../../components/AuthComponents/FormBottom/FormBottom";
import RegisterForm from "../../components/AuthComponents/RegisterForm/RegisterForm";

const Register = () => {
  return (
    <>
      <div className="absolute -top-[1px] pb-[1px] z-[2] px-[1px] left-1/2 transform -translate-x-1/2 bg-gradient-to-bl from-[#2B54E7] to-[rgba(255,255,255,0.1)]  rounded-b-xl text-lg sm:text-2xl font-bolder">
        <h2 className="bg-main px-4 py-2 rounded-b-xl text-white">Register</h2>
      </div>

      <div className="flex flex-col gap-6 mt-[96px] mb-12 text-sm sm:text-base">
        <RegisterForm />
        <FormBottom
          href="/login"
          text="Already have an account?"
          linkText="Login"
        />
      </div>
    </>
  );
};

export default Register;
