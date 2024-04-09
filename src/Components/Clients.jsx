import React from "react";
import cli from "./Css/client.module.css";

function Client() {
  return (
    <div className="flex text-center">
      <div className={cli.trusted_clients}>
        <h5>Trusted by Over 50+ Client Nationwide</h5>
        <div className={cli.client_scroll_container}></div>
        <div className={cli.deal_of_the_day}>
          {/* Deal of the day is hidden in mobile screen */}
          <div className="hidden sm:flex flex-col items-start pl-36 pt-20">
            <span className="text-blue-800 font-medium text-lg">40% Off</span>
            <h1 className="text-5xl font-bold">Deals of the Day</h1>
            <h1 className="text-5xl font-medium">
              16 <span className="text-lg font-bold mr-3">H:</span>
              23 <span className="text-lg font-bold mr-3">M:</span>
              12 <span className="text-lg font-bold ">S</span>
            </h1>
            <button
              type="button"
              className="text-white font-semibold mt-5 bg-blue-700 hover:bg-blue-900 rounded-full text-sm px-8 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-900"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Client;
