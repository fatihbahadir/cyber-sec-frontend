import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import FatihImg from "../../assets/fatih.png";
import axios from "../../services/api";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/CommonComponents/Loading/Loading";
import AuthInput from "../../components/AuthComponents/AuthInput/AuthInput";
import ProfileInput from "../../components/ProfileComponents/ProfileInput/ProfileInput";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    roles: {},
  });

  const [formData, setFormData] = useState({
    user: "",
    pwd: "",
  });

  const { auth } = useAuth();
  const navigate = useNavigate();

  const editUser = async (e : MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    if (formData.user.length < 1) {
      toast.error("Please enter a valid username!");
      setLoading(false);
      return;
    }
    if (formData.pwd.trim() === "") {
      toast.error("Please enter a password!");
      setLoading(false);
      return;
    }
    try {
      const response = await axios.put(
        "/user",
        {
          user: formData.user,
          pwd: formData.pwd,
        },
        {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        }
      );
      toast.success("Your changes saved successfuly. Please login again! ")      
      setLoading(false);      
      navigate("/login", { replace: true });
    } catch (err) {
      toast.error("An error occured while trying to edit!");
      setFormData({
        user: "",
        pwd: ""
      });

      setLoading(false);
    }
  };


  const getUser = async () => {
    try {
      setLoading(true);
      const userResponse = await axios.get("/user", {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
      });

      setUser(userResponse.data.data);
      setFormData({ ...formData, user: userResponse.data.data.username });

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-gradient-to-bl from-[#2B54E7] to-[rgba(255,255,255,0.1)] text-white p-[1px] rounded-xl drop-shadow-md">
          <div className="flex flex-col items-center  bg-gradient-to-br from-[rgba(47,54,97,1)] to-[rgb(47,54,97)] rounded-xl relative gap-6 gradient-border px-8  py-6 w-[350px]">
            <div className="flex w-full items-center justify-between">
              <h2 className="text-lg text-fontColor">Edit Profile</h2>
              <div className="flex items-center">
                <input
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  type="checkbox"
                  id="test"
                  className="toggle hidden"
                />
                <label
                  htmlFor="test"
                  className="label bg-transparent border border-strokeBlue w-[40px] h-[20px] rounded-[50px] cursor-pointer inline-block relative"
                >
                  <div className="ball bg-fontColor w-[18px] h-[18px] rounded-[50px] absolute top-[.2px] left-[.2px]"></div>
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <div className="bg-gradient-to-b from-[rgba(255,255,255,0.24)] to-[rgba(255,255,255,0)] text-white p-[1px] rounded-[25px] drop-shadow-md">
                <div className="flex items-center justify-center bg-[#252A4C] w-[100px] h-[100px] rounded-[25px]">
                  <div className="w-[80px] h-[80px] flex items-center justify-center bg-gradient-to-br from-[rgba(43,118,231,0.64)] to-[rgba(196,196,196,0)] rounded-full">
                    <img
                      src={FatihImg}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                </div>
              </div>
              <p className="text-fontColor -mt-1 text-sm">
                {Object.keys(user.roles)[0]}
              </p>
            </div>

            <div className="flex flex-col items-center w-full justify-center gap-4">
              <ProfileInput
                disabled={!isChecked}
                value={formData.user}
                name="user"
                id="user"
                onChange={handleInputChange}
                type="text"
                placeholder="username"
              />
              <ProfileInput
                disabled={!isChecked}
                value={formData.pwd}
                name="pwd"
                id="pwd"
                onChange={handleInputChange}
                type="password"
                placeholder="password"
              />
            </div>

            <div className="w-full flex items-center justify-end mt-2">
              <button
              disabled={!isChecked}
              onClick={editUser}
              className="px-3 text-sm py-[6px] border border-strokeBlue text-white bg-strokeBlue rounded-[35px]  hover:bg-[#2E3661] focus:outline-none transition-all disabled:opacity-30"      
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
