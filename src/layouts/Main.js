import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { ThemeContext } from "../contexts/ThemeProvider";
import Footer from "../pages/Footer/Footer";

const Main = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <div data-theme={dark ? "dark" : "light"}>
      <Header />
      <Outlet data-theme={dark ? "dark" : "light"} />
      <Footer />
    </div>
  );
};

export default Main;
