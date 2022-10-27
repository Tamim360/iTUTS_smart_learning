import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Register = () => {
  const { handleFacebookSignIn, handleGoogleSignIn, handleGithubSignIn } = useContext(AuthContext)
  // console.log(handleFacebookSignIn);

  const navigate = useNavigate()

  const handleSignInWithFacebook = () => {
    handleFacebookSignIn()
    .then(res => {
      navigate('/')
      const user = res.user
      console.log(user);
    })
    .catch(err => console.error(err))
  }

  const handleSignInWithGoogle = () => {
    handleGoogleSignIn()
    .then(res => {
      navigate('/')
      const user = res.user
      console.log(user);
    })
    .catch(err => console.error(err))
  }

  const handleSignInWithGithub = () => {
    handleGithubSignIn()
    .then(res => {
      navigate('/')
      const user = res.user
      console.log(user);
    })
    .catch(err => console.error(err))
  }

    return (
        <div className="hero">
      <form className="hero-content flex-col mt-8">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please Register</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Full name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <p className="label-text-alt">Allrady have an account? 
                <NavLink to="/login" className="label-text-alt link link-hover ml-2">
                  Login
                </NavLink>
                </p>
              </label>
            </div>
            <div className="text-center">
              <p className="label-text-alt">---or signin with---</p>
              <div className="flex justify-center gap-2 mt-2 items-center">
                <NavLink onClick={handleSignInWithFacebook}><FaFacebook/></NavLink>
                <NavLink onClick={handleSignInWithGoogle}><FaGoogle/></NavLink>
                <NavLink onClick={handleSignInWithGithub}><FaGithub/></NavLink>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            
          </div>
        </div>
      </form>
    </div>
    );
};

export default Register;