import React from "react";
import Navi from "./Components/Navi";
import Client from "./Components/Clients";
import Product from "./Components/Product";
import Blog from "./Components/Blog";
import About from "./Components/About";
import Feedback from "./Components/Feedback";
import Description from "./Components/Description";
import ho from "./Assets/home.module.css";

function Home() {
  return (
    <div>
      <Navi />
      <Client />
      <Description />
      <Product />
      <Blog />
      <About />
      <Feedback />
    </div>
  );
}
export default Home;
