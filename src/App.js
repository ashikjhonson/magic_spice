import React from "react";
import Navi from "./Components/Navi";
import Client from "./Components/Clients";
import Product from "./Components/Product";
import Blog from "./Components/Blog";
import About from "./Components/About";
import Feedback from "./Components/Feedback";
import Description from "./Components/Description";
import Footer from "./Components/Footer";
import Address from "./Components/order components/Address";
import Delivery from "./Components/order components/Delivery";
import Order from "./Components/order components/Order";

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
      {/* <Order />
      <Delivery />
      <Address /> */}

      <Footer />
    </div>
  );
}
export default Home;
