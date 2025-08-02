import React, { use, useState } from "react";
import icon from "../assets/fav-icon.png";
import { CiImageOn, CiMail } from "react-icons/ci";
import { GoLock, GoMail } from "react-icons/go";
import { AiOutlineEye } from "react-icons/ai";
import { IoEyeOffOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import { FiUser } from "react-icons/fi";
import { Slide, toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
const Register = () => {
  const [seePasswor, setSeepassword] = useState(false);
  const {userSignUp, googleSignin } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const { name, email, photo, password } = data;

    // input fild validate
    if (!name) {
      toast.error("Enter Your Valid Name", {
        autoClose: 3000,
        hideProgressBar: true,
        transition: Slide,
      });
      return;
    }
    if (!email) {
      toast.error("Enter Your Valid Email", {
        autoClose: 3000,
        hideProgressBar: true,
        transition: Slide,
      });
      return;
    }
    if (!photo) {
      toast.error("Enter Your Valid Photo Url", {
        autoClose: 3000,
        hideProgressBar: true,
        transition: Slide,
      });
      return;
    }

    // password validate
    if (!password) {
      toast.error("Enter Your Strong Password", {
        autoClose: 3000,
        hideProgressBar: true,
        transition: Slide,
      });
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long", {
        autoClose: 3000,
        hideProgressBar: true,
        transition: Slide,
      });
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.", {
        autoClose: 3000,
        hideProgressBar: true,
        transition: Slide,
      });
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.", {
        autoClose: 3000,
        hideProgressBar: true,
        transition: Slide,
      });
      return;
    }
    if (!/[0-9]/.test(password)) {
      toast.error("Password must contain at least one number.", {
        autoClose: 3000,
        hideProgressBar: true,
        transition: Slide,
      });
      return;
    }
    if (!/[!@#$%^&*]/.test(password)) {
      toast.error(
        "Password must contain at least one special character (!@#$%^&*).",
        {
          autoClose: 3000,
          hideProgressBar: true,
          transition: Slide,
        }
      );
      return;
    }

    // user sign up
    userSignUp(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
          updateProfile(user, { displayName: name, photoURL: photo })
          .then(() => {
            toast.success("Sign Up successful ", {
              autoClose: 3000,
              hideProgressBar: true,
              transition: Slide,
            });
            e.target.reset();
            navigate(location.state?`${location.state}`:"/", { replace: true });

          })
          .catch((error) => {
            toast.error(error.message, {
              autoClose: 3000,
              hideProgressBar: true,
              transition: Slide,
            });
          });
      })
      .catch((error) => {
        toast.error(error.message, {
          autoClose: 3000,
          hideProgressBar: true,
          transition: Slide,
        });
      });
  };

  // google sign in
  const handleGoogleSignin = () =>{
      googleSignin()
      .then(()=>{
        toast.success("Sing In successful ", {
            autoClose: 3000,
            hideProgressBar: true,
            transition: Slide,
          });
        navigate(location.state?`${location.state}`:"/", { replace: true });

      })
      .catch((error)=>{
        toast.error(error.message, {
            autoClose: 3000,
            hideProgressBar: true,
            transition: Slide,
          });
      })
    }
  return (
    <div className="bg-base-100 flex justify-center items-center h-auto sm:min-h-230">
      <div className="w-full shadow-0 sm:w-2/3 lg:w-1/3 bg-base-200 sm:shadow p-10 rounded-lg">
        <div>
          <img className="w-14 mx-auto" src={icon} alt="" />
          <h1 className="text-center text-base-300 text-2xl font-bold mt-3">
            Join SocLink
          </h1>
          <p className="text-center text-base font-normal text-base-content mt-2">
            Create your account and start making <br /> a difference in your
            community
          </p>
        </div>
        <div>
          <form onSubmit={handleRegister} className="mt-5">
            <label>Your Name</label>
            <div className="relative mt-1.5">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="pl-10 border-2 border-mainborder w-full bg-base-100 p-2 rounded-lg text-sm text-base-content focus:outline focus:outline-offset-2 focus:outline-border-outline"
              />
              <FiUser
                size={17}
                className="absolute top-1/2 -translate-y-1/2 left-3 text-base-content "
              />
            </div>
            <label className="mt-3 block">Email</label>
            <div className="relative mt-1.5">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="pl-10 border-2 border-mainborder w-full bg-base-100 p-2 rounded-lg text-sm text-base-content focus:outline focus:outline-offset-2 focus:outline-border-outline"
              />
              <GoMail
                size={17}
                className="absolute top-1/2 -translate-y-1/2 left-3 text-base-content "
              />
            </div>
            <label className="mt-3 block">Photo Url</label>
            <div className="relative mt-1.5">
              <input
                type="url"
                name="photo"
                placeholder="Enter Your Photo Url"
                className="pl-10 border-2 border-mainborder w-full bg-base-100 p-2 rounded-lg text-sm text-base-content focus:outline focus:outline-offset-2 focus:outline-border-outline"
              />
              <CiImageOn
                size={17}
                className="absolute top-1/2 -translate-y-1/2 left-3 text-base-content "
              />
            </div>
            <label className="mt-3 block">Password</label>
            <div className="relative mt-1.5">
              <input
                type={seePasswor ? "text" : "password"}
                name="password"
                placeholder="Enter A Password"
                className="pl-10 border-2 border-mainborder w-full bg-base-100 p-2 rounded-lg text-sm text-base-content focus:outline focus:outline-offset-2 focus:outline-border-outline"
              />
              <GoLock
                size={17}
                className="absolute top-1/2 -translate-y-1/2 left-3 text-base-content "
              />
              {seePasswor ? (
                <AiOutlineEye
                  size={20}
                  className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-base-content"
                  onClick={() => setSeepassword(!seePasswor)}
                />
              ) : (
                <IoEyeOffOutline
                  size={20}
                  className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-base-content"
                  onClick={() => setSeepassword(!seePasswor)}
                />
              )}
            </div>
            <input
              type="submit"
              value="Sign Up"
              className="w-full mt-5 py-2 rounded-lg cursor-pointer bg-gradient-to-r from-primary to-secondary text-white"
            />
          </form>
          <div className="divider text-sm uppercase mt-6 text-base-content">
            Or continue with
          </div>
          {/* login with google */}
          <button onClick={handleGoogleSignin} className="btn bg-white text-black border-[#e5e5e5] w-full mt-2">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

          <p className="text-center text-base-content text-base mt-4">
            Already have an account?
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold cursor-pointer">
              <Link to={"/auth/login"}> Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
