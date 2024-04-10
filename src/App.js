import React from "react";
import Navi from "./Components/Navi";
import Client from "./Components/Clients";
import Product from "./Components/Product";
import Blog from "./Components/Blog";
import About from "./Components/About";
import Feedback from "./Components/Feedback";
import Description from "./Components/Description";
import Footer from "./Components/Footer";

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
      <Footer />
    </div>
  );
}
export default Home;
