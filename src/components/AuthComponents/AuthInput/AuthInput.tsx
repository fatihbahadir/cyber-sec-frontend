import React, { ReactNode } from "react";
import { IconType } from "react-icons/lib";

type AuthInputParams = {
    inputAttribs: object,
    isLoginInput: boolean,
    Icon?: IconType
}

const AuthInput = ({ inputAttribs, isLoginInput, Icon }  : AuthInputParams) => {
  return (
    <div className="focus-within:bg-strokeBlue bg-gradient-to-bl from-[#2B54E7] to-[rgba(255,255,255,0)] text-white p-[1px] rounded-[35px] shadow-sm"> 
    <div className="relative w-[250px] sm:w-[330px] bg-main  text-fontColor rounded-[35px] focus-within:text-white transition-all">
    <input
        autoComplete="off"
        required
        className="w-full bg-main pl-4 pr-10 py-2 rounded-[35px] placeholder:text-fontColor focus:outline-none border-0 outline-none focus-within:placeholder-white transition-all"
        {...inputAttribs}
      />
              <div
          className="absolute inset-y-0 right-0 pr-4  
                    flex items-center  
                    pointer-events-none"
        >
      {(isLoginInput && Icon) && <Icon className="w-[1.1em] h-[1.1em]" />}
        </div>
    </div>
    </div>
  );
};

export default AuthInput;