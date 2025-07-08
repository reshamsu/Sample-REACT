import React from "react";
import Single from "../../assets/single.png";
// import Double from '../../assets/double.jpg'
// import Triple from '../../assets/triple.jpg'

const Cards = () => {
  return (
    <div className="w-full py-[6rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-10">
        <div className="w-full shadow-xl flex flex-col p-8 my-4 rounded-xl hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-4rem] bg-white"
            src={Single}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium p-8">
            <p className="py-2 border-b border-gray-100 max-8 mt-2">500 GB Storage</p>
            <p className="py-2 border-b border-gray-100 max-8">1 Granted User</p>
            <p className="py-2 border-b border-gray-100 max-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Start Trial</button>
        </div>
        <div className="w-full bg-gray-100 shadow-xl flex flex-col p-8 md:my-0 rounded-xl hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-4rem] bg-transparent"
            src={Single}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium p-8">
            <p className="py-2 border-b border-gray-100 max-8 mt-2">500 GB Storage</p>
            <p className="py-2 border-b border-gray-100 max-8">1 Granted User</p>
            <p className="py-2 border-b border-gray-100 max-8">Send up to 2 GB</p>
          </div>
          <button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-black">Start Trial</button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-8 my-4 rounded-xl hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-4rem] bg-transparent"
            src={Single}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium p-8">
            <p className="py-2 border-b border-gray-100 max-8 mt-2">500 GB Storage</p>
            <p className="py-2 border-b border-gray-100 max-8">1 Granted User</p>
            <p className="py-2 border-b border-gray-100 max-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Start Trial</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
