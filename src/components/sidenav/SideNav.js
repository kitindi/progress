import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  SquaresFour,
  Student,
  Exam,
  CalendarBlank,
  SignOut,
  Notebook,
} from "@phosphor-icons/react";

const SideNav = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="col-span-2  px-10 border-r border-gray-200 flex flex-col gap-60">
      <ul className="mt-20 flex flex-col gap-6">
        <Link
          to="/dashboard"
          className={`${
            location.pathname === "/dashboard"
              ? "flex gap-3 items-center text-blue-600"
              : "flex gap-3 items-center"
          }`}
        >
          <span>
            <SquaresFour size={24} />
          </span>
          Overview
        </Link>
        <Link
          to="/students"
          className={`${
            location.pathname === "/students"
              ? "flex gap-3 items-center text-blue-600"
              : "flex gap-3 items-center"
          }`}
        >
          <span>
            <Student size={24} />
          </span>
          Students
        </Link>
        <Link
          to="/gradebook"
          className={`${
            location.pathname === "/gradebook"
              ? "flex gap-3 items-center text-blue-600"
              : "flex gap-3 items-center"
          }`}
        >
          <span>
            <Exam size={24} />
          </span>
          Grade Book
        </Link>

        <Link
          to="/calendar"
          className={`${
            location.pathname === "/calendar"
              ? "flex gap-3 items-center text-blue-600"
              : "flex gap-3 items-center"
          }`}
        >
          <span>
            <CalendarBlank size={24} />
          </span>
          Calendar
        </Link>
        <Link
          to="/planner"
          className={`${
            location.pathname === "/planner"
              ? "flex gap-3 items-center text-blue-600"
              : "flex gap-3 items-center"
          }`}
        >
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
