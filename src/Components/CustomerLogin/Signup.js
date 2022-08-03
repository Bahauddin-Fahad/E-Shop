import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";

import GoogleLogin from "./GoogleLogin";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //Creating User with Email And Password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    await createUserWithEmailAndPassword(email, password);
  };

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
  return (
    <div className="flex justify-center items-center py-6">
      <div className="card w-full max-w-md shadow-2xl bg-white">
        <div className="card-body">
          <h2 className="text-center text-xl font-bold uppercase">Sign up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="Text"
                placeholder="Enter Your Name"
                className="input input-bordered"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-[red]">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

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
                className="btn btn-primary text-white font-medium\"
                value="Sign up"
              />
            </div>
          </form>
          <p className="text-sm text-center">
            Already have an account?
            <Link className="text-primary ml-2" to="/login">
              Login Here
            </Link>
          </p>
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
};

export default Signup;
