import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Card from "./components/Card";
import Table from "./components/Table";
import { HiUsers } from "react-icons/hi2";
import { HiUser } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

const App = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <Sidebar />
      <div className="flex-1 bg-gray-900">
        <Header />
        <div className="p-5 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Card icon={<HiUsers />} title="Total Users" value="250" color="purple-500" />
            <Card icon={<HiUser className="text-yellow-500"/>} title="New Users" value="15" color="yellow-300" />
            <Card icon={<FaHeart className="text-green-400"/>} title="Top Users" value="200" color="purple-500" />
            <Card icon={<HiUserGroup className="text-blue-300"/>} title="Other Users" value="35" color="purple-500" />
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default App;
