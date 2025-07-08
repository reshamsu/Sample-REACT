import React from "react";
import Property from "../../assets/property.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-8">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-8 p-4" src={Property} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Property Listings Centrally</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi eius
            aut ullam dignissimos vitae tenetur cumque quidem enim ut. Quaerat
            nisi voluptatem ipsa dolore doloremque libero ipsam voluptatum
            facilis laudantium?
          </p>
          <button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black">Find Property</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
