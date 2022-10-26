import React, { useContext } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { ThemeContext } from "../../contexts/ThemeProvider";

const Success = () => {
    const {dark} = useContext(ThemeContext)
  return (
    <div className="grid place-items-center" data-theme={dark ? "dark" : "light"}>
      <Player
        autoplay
        loop
        src="https://assets2.lottiefiles.com/packages/lf20_xwmj0hsk.json"
        style={{ height: "300px", width: "300px" }}
      >
      </Player>
      <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mt-6 text-violet-700">Thank you for perchase!!!</h2>
    </div>
  );
};

export default Success;
