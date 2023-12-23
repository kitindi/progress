import React from "react";
import { Link } from "react-router-dom";
import {
  SquaresFour,
  Student,
  Exam,
  ChartBarHorizontal,
  CalendarBlank,
  SignOut,
  Notebook,
} from "@phosphor-icons/react";

const SideNav = () => {
  return (
    <div className="col-span-2  px-10 border-r-2 border-gray-200 flex flex-col justify-between gap-16 h-[35rem]">
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
        <Link to="" className="flex gap-3 items-center">
          <span>
            <Notebook size={24} color="#1a1919" />
          </span>
          Lesson plan
        </Link>
      </ul>
      <div>
        <Link to="" className="text-sm flex items-center gap-3">
          <SignOut size={26} color="#1a1919" /> Logout
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
