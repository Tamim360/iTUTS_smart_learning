import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Error = () => {
  return (
    <div className="h-screen grid place-items-center">
      <Player
        autoplay
        loop
        src="https://assets4.lottiefiles.com/packages/lf20_suhe7qtm.json"
        style={{ height: "300px", width: "300px" }}
      ></Player>
    </div>
  );
};

export default Error;
