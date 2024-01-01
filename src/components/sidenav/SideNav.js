import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Exam, SignOut } from "@phosphor-icons/react";

const SideNav = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="col-span-2  pl-10 border-r border-gray-200 flex flex-col gap-60">
      <ul className="mt-10 flex flex-col gap-6">
        <Link
          to="/dashboard"
          className={`${
            location.pathname === "/dashboard"
              ? "flex gap-3 items-center text-blue-600"
              : "flex gap-3 items-center"
          }`}
        >
          <span className="flex gap-2 items-center text-base">
            {/* <SquaresFour size={24} /> */}
            <svg
              class="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Dashboard
          </span>
        </Link>
        <Link
          to="/students"
          className={`${
            location.pathname === "/students"
              ? "flex gap-3 items-center text-blue-600 text-base"
              : "flex gap-3 items-center text-base"
          }`}
        >
          <span>
            <svg
              class="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
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
            <Exam size={20} />
          </span>
          Grade Book
        </Link>

        {/* <Link
          to="/calendar"
          className={`${
            location.pathname === "/calendar"
              ? "flex gap-3 items-center text-blue-600 text-base"
              : "flex gap-3 items-center text-base"
          }`}
        >
          <span>
            <svg
              class="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
              <path d="M8 14h.01" />
              <path d="M12 14h.01" />
              <path d="M16 14h.01" />
              <path d="M8 18h.01" />
              <path d="M12 18h.01" />
              <path d="M16 18h.01" />
            </svg>
          </span>
          Schedule
        </Link>
        <Link
          to="/planner"
          className={`${
            location.pathname === "/planner"
              ? "flex gap-3 items-center text-blue-600 text-base"
              : "flex gap-3 items-center text-base"
          }`}
        >
          <span>
            <svg
              class="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </span>
          Lesson plan
        </Link> */}
      </ul>
      <div>
        <Link
          to=""
          className="text-base flex items-center gap-3 focus:text-blue-500"
        >
          <SignOut size={20} color="#1a1919" /> Logout
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
