import "./Css/description.module.css";
import c_icon from "../Assets/Images/icons/client.png";
import e_icon from "../Assets/Images/icons/cart.png";
import gift from "../Assets/Images/paneer.jpg";

const Description = () => {
  return (
    <div className="grid sm:grid-flow-row md:grid-cols-2 mx-16 mt-20 mb-10 ">
      <div className="flex flex-col pl-16 pt-10">
        <h1 className="text-4xl font-semibold border-l-[7px] my-3 pl-3 border-blue-700">
          We Have trusted
        </h1>
        <span className="text-blue-700 font-medium text-3xl pl-5">
          Since 1956
        </span>
        <div className="flex gap-20">
          <div className="flex gap-5 items-center mt-10">
            <img src={c_icon} alt="Image" height={50} width={70} />
            <div>
              <p className="text-3xl text-blue-700 font-medium">100+</p>
              <span className="text-gray-500 flex-col-reverse font-normal">
                Clients
              </span>
            </div>
          </div>
          <div className="flex gap-5 items-center mt-10">
            <img src={e_icon} alt="Image" height={50} width={70} />
            <div>
              <p className="text-3xl text-blue-700 font-medium">7 Tons +</p>
              <span className="text-gray-500 flex-col-reverse font-normal">
                Spices Exported
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-blue-100 rounded-3xl py-12 px-5">
        <div className=" w-52 ">
          <h3 className="text-4xl font-medium ">
            <span className="text-blue-700">Gift</span> For Your Beloved
          </h3>
          <p className="text-gray-500 font-medium my-5">How it works?</p>
          <button
            type="button"
            className="text-white font-normal mt-5 bg-blue-700 hover:bg-blue-900 rounded-full text-sm px-8 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-900"
          >
            Send Gift
          </button>
        </div>
        <div className="">
          <img src={gift} alt="Image" className="h-44" />
          {/* Add gift image here */}
        </div>
      </div>
    </div>
  );
};

export default Description;
