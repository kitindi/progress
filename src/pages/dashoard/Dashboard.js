import React from "react";
import Navbar from "../../components/nav/Navbar";
import SideNav from "../../components/sidenav/SideNav";
import { FadersHorizontal } from "@phosphor-icons/react";
import { Barchart } from "../../components/charts/Barchart";

const Dashboard = () => {
  return (
    <section className="w-full h-full">
      <Navbar />
      <div className="max-w-7xl mx-auto  grid grid-cols-12 ">
        <SideNav />
        <div className="col-span-10 px-20">
          <div className="grid grid-cols-12 gap-4 py-4">
            <div className="bg-blue-300 opacity-80 col-span-4 p-4 flex items-center gap-10 rounded-sm">
              <div>
                <p className="text-base mb-3">Total students</p>
                <p className="text-sm font-medium">Year : 2023/2024</p>
              </div>
              <p className="text-3xl font-semibold">46</p>
            </div>
            <div className="bg-blue-300 opacity-80 col-span-4 px-8 py-4 flex items-center gap-5 rounded-sm">
              <p className="text-base">Lessons:</p>{" "}
              <p className="text-3xl font-semibold">10</p>
            </div>
            <div className="bg-blue-300 opacity-80 col-span-4 px-8 py-4 flex items-center gap-5 rounded-sm">
              <p className="text-base">Class:</p>{" "}
              <p className="text-2xl font-medium">Form 4A</p>
            </div>
          </div>
          <div className="grid grid-cols-12  bg-blue-300 opacity-80 rounded-sm py-3 gap-2">
            <div className=" col-span-3 p-2 flex items-center">
              <select
                name=""
                id=""
                className="w-full py-2 text-sm focus:outline-none"
              >
                <option value="">Select class</option>
                <option value="Form 4A">Form 4A</option>
                <option value="Form 4B">Form 4B</option>
                <option value="Form 4C">Form 4C</option>
                <option value="Form 3A">Form 3A</option>
                <option value="Form 3B">Form 3B</option>
                <option value="Form 3C">Form 3C</option>
              </select>
            </div>

            <div className=" col-span-3 p-2 flex items-center">
              <select
                name=""
                id=""
                className="w-full py-2 text-sm focus:outline-none"
              >
                <option value="">Select Term</option>
                <option value="term1">Term 1</option>
                <option value="term2">Term 2</option>
              </select>
            </div>
            <div className=" col-span-3 p-2 flex items-center">
              <select
                name=""
                id=""
                className="w-full py-2 text-sm focus:outline-none"
              >
                <option value="">Select Year</option>
                <option value="2023/2024">2023/2024</option>
                <option value="2024/2024">2024/2025</option>
                <option value="2025/2026">2025/2026</option>
              </select>
            </div>
            <div className=" col-span-3 p-2 flex items-center">
              <button className="flex items-center gap-3 justify-center w-full px-10 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-non">
                <FadersHorizontal size={32} color="#1a1919" weight="light" />{" "}
                Filter
              </button>
            </div>
          </div>
          <div className="py-8">
            <Barchart />
          </div>
          <div className="grid grid-cols-12 py-10">
            <div className="col-span-6">
              <h3 className="text-lg font-medium text-slate-700">
                Upcoming Events
              </h3>
              <div className="mt-2">
                <div className="flex gap-5 items-center border-b-2 border-slate-300 py-3">
                  <div className="p-3 bg-blue-300 rounded-sm w-20 h-20 flex flex-col justify-center items-center ">
                    <p className="text-xl font-bold">8</p>
                    <p className="text-lg">Jan</p>
                  </div>
                  <p>School reopen for the second term</p>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex gap-5 items-center border-b-2 border-slate-300 py-3">
                  <div className="p-3 bg-blue-300 rounded-sm w-20 h-20 flex flex-col justify-center items-center ">
                    <p className="text-xl font-bold">8</p>
                    <p className="text-lg">Jan</p>
                  </div>
                  <p>School reopen for the second term</p>
                </div>
              </div>
            </div>
            <div className="col-span-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
