import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "./Loading";
import GoogleLogin from "./GoogleLogin";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //Sign In with Email and Password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate("/");
  }

  if (loading) {
    return <Loading />;
  }

  let signInError;
  if (error) {
    signInError = (
      <p className="text-[red]">
        <span>{error?.message}</span>
      </p>
    );
  }

  // Login Form Submit Function
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="flex justify-center items-center pt-6">
      <div className="card w-full max-w-md shadow-2xl bg-white">
        <div className="card-body">
          <h2 className="text-center text-xl font-bold uppercase">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide A Valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-[red]">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-[red]">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="input input-bordered"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                    message:
                      "Must Contain 8 Characters including 1 Uppercase & 1 Lowercase Letter",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-[red]">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="label-text-alt text-[red]">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInError}
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary text-white font-medium"
                value="Login"
              />
            </div>
          </form>
          <p className="text-sm text-center">
            New to Portal?
            <Link className="text-primary ml-2" to="/signup">
              Create New Account
            </Link>
          </p>
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
