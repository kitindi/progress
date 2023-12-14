import React from "react";
import {
  SquaresFour,
  Student,
  Exam,
  ChartBarHorizontal,
  CalendarBlank,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Navbar from "../../components/nav/Navbar";

const Dashboard = () => {
  return (
    <section className="w-full h-full">
      <Navbar />
      <div className="max-w-7xl mx-auto  h-screen grid grid-cols-12 ">
        <div className="col-span-2  px-10 border-r-2 border-gray-300">
          <ul className="mt-20 flex flex-col gap-6">
            <Link to="" className="flex gap-3 items-center">
              <span>
                <SquaresFour size={24} />
              </span>
              Overview
            </Link>
            <Link to="" className="flex gap-3 items-center">
              <span>
                <Student size={24} />
              </span>
              Students
            </Link>
            <Link to="" className="flex gap-3 items-center">
              <span>
                <Exam size={24} />
              </span>
              Grade Book
            </Link>
            <Link to="" className="flex gap-3 items-center">
              <span>
                <ChartBarHorizontal size={24} />
              </span>
              Analytics
            </Link>
            <Link to="" className="flex gap-3 items-center">
              <span>
                <CalendarBlank size={24} />
              </span>
              Calendar
            </Link>
          </ul>
        </div>
        <div className="col-span-10"></div>
      </div>
    </section>
  );
};

export default Dashboard;
