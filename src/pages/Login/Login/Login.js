import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider";

const Login = () => {
  const {
    handleFacebookSignIn,
    handleGoogleSignIn,
    handleGithubSignIn,
    signIn,
  } = useContext(AuthContext);
  // console.log(handleFacebookSignIn);

  const navigate = useNavigate();

  const location = useLocation();
  const from = location?.state?.from?.pathname;

  const handleSignInWithFacebook = () => {
    handleFacebookSignIn()
      .then((res) => {
        navigate(from || "/", { replace: true });
        const user = res.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  const handleSignInWithGoogle = () => {
    handleGoogleSignIn()
      .then((res) => {
        navigate(from || "/", { replace: true });
        const user = res.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  const handleSignInWithGithub = () => {
    handleGithubSignIn()
      .then((res) => {
        navigate(from || "/", { replace: true });
        const user = res.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((res) => {
        form.reset();
        navigate(from || "/", { replace: true });
        const user = res.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="hero">
      <div className="hero-content flex-col mt-8">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please Login</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={(e) => handleSubmit(e)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
              />
              <label className="label">
                <NavLink className="label-text-alt link link-hover">
                  Forgot password?
                </NavLink>
                <NavLink
                  to="/register"
                  className="label-text-alt link link-hover"
                >
                  New? Register.
                </NavLink>
              </label>
            </div>
            <div className="text-center">
              <p className="label-text-alt">---or login with---</p>
              <div className="flex justify-center gap-2 mt-2 items-center">
                <NavLink onClick={handleSignInWithFacebook}>
                  <FaFacebook />
                </NavLink>
                <NavLink onClick={handleSignInWithGoogle}>
                  <FaGoogle />
                </NavLink>
                <NavLink onClick={handleSignInWithGithub}>
                  <FaGithub />
                </NavLink>
              </div>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
