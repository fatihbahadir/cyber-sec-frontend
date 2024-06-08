import FormBottom from "../../components/AuthComponents/FormBottom/FormBottom";
import LoginForm from "../../components/AuthComponents/LoginForm/LoginForm";

const Login = () => {
  return (
    <>
      <div className="absolute -top-[1px] pb-[1px] z-[2] px-[1px] left-1/2 transform -translate-x-1/2 bg-gradient-to-bl from-[#2B54E7] to-[rgba(255,255,255,0.1)]   rounded-b-xl text-lg sm:text-2xl font-bolder">
      <h2 className="bg-main px-4 py-2 rounded-b-xl text-white">Login</h2>
      </div>
      <div className="flex flex-col gap-6 mt-[96px] mb-12 text-sm sm:text-base">
        <LoginForm/>
        <FormBottom href="/signup" text="Don't have an account?" linkText= "Register"/>
      </div>
    </>
  );
};

export default Login;
