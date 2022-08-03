import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import googleLogo from "../../Images/logos/login/google.png";
import Loading from "./Loading";
const GoogleLogin = () => {
  //Google Sign In
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();

  if (googleUser) {
    navigate("/");
  }

  if (googleLoading) {
    return <Loading />;
  }

  let signInError;
  if (googleError) {
    signInError = (
      <p className="text-[red]">
        <span>{googleError?.message}</span>
      </p>
    );
  }
  return (
    <div>
      <div className="divider">OR</div>
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-active bg-white text-black w-full"
      >
        <img className="w-7 mr-2" src={googleLogo} alt="" />
        Continue With Google
      </button>
      {signInError}
    </div>
  );
};

export default GoogleLogin;
