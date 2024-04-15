import React from "react";
import ProductCard from "./ProductCard";
import square from "../../Assets/Images/icons/square.svg";

const Products = () => {
  const products = [
    {
      image: "https://via.placeholder.com/100",
      name: "Product 1",
      price: "$100",
    },
    {
      image: "https://via.placeholder.com/100",
      name: "Product 2",
      price: "$200",
    },
    {
      image: "https://via.placeholder.com/100",
      name: "Product 1",
      price: "$100",
    },
    {
      image: "https://via.placeholder.com/100",
      name: "Product 2",
      price: "$200",
    },
    {
      image: "https://via.placeholder.com/100",
      name: "Product 1",
      price: "$100",
    },
    {
      image: "https://via.placeholder.com/100",
      name: "Product 2",
      price: "$200",
    },
    {
      image: "https://via.placeholder.com/100",
      name: "Product 1",
      price: "$100",
    },
    {
      image: "https://via.placeholder.com/100",
      name: "Product 2",
      price: "$200",
    },
  ];
  return (
    <div className="flex flex-row bg-gray-100">
      <div className="w-1/5 p-4 pl-10">
        <h2 className="text-xl font-bold my-10 flex gap-2">
          <img src={square} alt="" className="w-6 object-contain" />
          <span>Categories</span>
        </h2>
        <ul className="flex flex-col gap-5">
          <li className="rounded-full w-fit px-5 py-1 bg-blue-200 cursor-pointer">
            All Products
          </li>
          <li className="rounded-full w-fit px-5 py-1 hover:bg-blue-200 cursor-pointer">
            Whole Spices
          </li>
          <li className="rounded-full w-fit px-5 py-1 hover:bg-blue-200 cursor-pointer">
            Nuts & Seeds
          </li>
          <li className="rounded-full w-fit px-5 py-1 hover:bg-blue-200 cursor-pointer">
            Tea & Coffee
          </li>
          <li className="rounded-full w-fit px-5 py-1 hover:bg-blue-200 cursor-pointer">
            Masalas
          </li>
          <li className="rounded-full w-fit px-5 py-1 hover:bg-blue-200 cursor-pointer">
            Health & Wellness
          </li>
          <li className="rounded-full w-fit px-5 py-1 hover:bg-blue-200 cursor-pointer">
            Others
          </li>
        </ul>
      </div>
      <div className="w-4/5 p-4">
        <h1 className="text-2xl font-bold text-gray-900 mt-5 border-l-4 pl-2 border-blue-700">
          Top Picks
        </h1>
        <p className="text-gray-600 text-sm font-medium mt-3">
          Explore Our Diverse Range of Premium Spice Offerings.
        </p>
        <div className="grid grid-cols-3 gap-y-10 py-10">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
