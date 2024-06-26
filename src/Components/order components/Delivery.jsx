import React from "react";
import history from "../../Assets/Images/icons/history.png";
import side from "../../Assets/Images/icons/side.png";

const Delivery = () => {
  return (
    <div className="">
      <h1 className="text-center text-3xl font-bold">Delivery Address</h1>
      <div class="mt-5 bg-blue-100 shadow rounded-xl w-[400px] mx-auto">
        <div class="flex">
          <div class="flex-1 py-5 pl-5 ">
            <ul>
              <li class="text-xl font-medium uppercase ">Belfin Baby</li>
              {/* Name & other details  */}
              <li>Cherupuzha, Kannur, 670690</li>
              <li class="text-gray-500">847 Jewes Bridge</li>
              <li class="text-gray-500">Apt. 17 London</li>
              <li class="text-gray-500">UK 474-769-3919</li>
            </ul>
          </div>
          <div class="flex-none pt-2.5 pr-2.5 pl-1">
            <img src={history} alt="" className="h-5 ml-1" />
          </div>
        </div>
        <button className="hover:shadow-form w-[300px] mx-10 mb-5 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
          Add as New Address
        </button>
      </div>
      <div class="flex justify-between mt-5 px-10 py-3 gap-3  bg-blue-100 shadow rounded-xl w-[400px] mx-auto">
        <h1 className="text-center text-xl font-medium">Add a New Address</h1>
        <img src={side} alt="" className="w-8 h-5" />
      </div>
    </div>
  );
};

export default Delivery;
