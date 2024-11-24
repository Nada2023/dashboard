import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 p-4 ml-5 rounded text-gray-300">
      <p className="text-lg font-bold">User</p>
      <input
        type="text"
        placeholder="Search for..."
        className="bg-gray-700 w-[70%] sm:w-1/3 m-4 text-sm text-gray-300 p-2 rounded-md"
      />
      <button className="bg-purple-500 text-white px-4 py-2 font-bold rounded-md">
        Add User
      </button>
    </div>
  );
};

export default Header;
