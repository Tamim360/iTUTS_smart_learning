import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Player
          autoplay
          loop
          src="https://assets6.lottiefiles.com/packages/lf20_iv4dsx3q.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
        <div>
          <h1 className="text-5xl font-bold">Welcome to iTUTS</h1>
          <p className="py-6">
            Hello, welcome to iTUTS, Online learning is becoming more and more
            popular nowadays. Online programming language learning institutes
            are a great way to learn how to code. iTUTS offers various programs
            that are designed to suit the needs of each individual student.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
