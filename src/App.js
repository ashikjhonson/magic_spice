import React from "react";
import Navi from "./Components/Navi";
import Client from "./Components/Clients";
import Product from "./Components/Product";
import Blog from "./Components/Blog";
import About from "./Components/About";
import Feedback from "./Components/Feedback";
import Description from "./Components/Description";
import Footer from "./Components/Footer";
import Products from "./Components/product components/Product";
import Address from "./Components/order components/Address";
import Delivery from "./Components/order components/Delivery";
import Order from "./Components/order components/Order";
import Cart from "./Components/cart components/Cart";

function Home() {
  return (
    <div>
      {/* <Navi />
      <Client />
      <Description />
      <Product /> */}
      <Products />
      {/* <Blog />
      <About />
      <Feedback />
      <Cart />
      <Order />
      <Delivery />
      <Address />
      <Footer /> */}
    </div>
  );
}
export default Home;
