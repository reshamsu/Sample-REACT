import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
const [nav, setNav] = useState(false)
const handleNav = () => {
    setNav(!nav)
}

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Property</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden relative z-50">
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={22} />}
      </div>
      <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-l border-l-gray-800 bg-black ease-in-out duration-500" : 'fixed right-[-100%]'}>
        <ul className="p-8">
          <li className="p-4 border-b border-gray-900">Home</li>
          <li className="p-4 border-b border-gray-900">Property</li>
          <li className="p-4 border-b border-gray-900">Resources</li>
          <li className="p-4 border-b border-gray-900">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
