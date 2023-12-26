import React from "react";
import Navbar from "../../components/nav/Navbar";
import SideNav from "../../components/sidenav/SideNav";

const Dashboard = () => {
  return (
    <section className="w-full h-full bg-gray-50">
      <Navbar />
      <div className="max-w-8xl mx-auto  grid grid-cols-12 ">
        <SideNav />
        <div className="col-span-10 px-20">
          {/* start here */}
          {/* <!-- Card Section --> */}
          <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto">
            {/* <!-- Grid --> */}
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* <!-- Card --> */}
              <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                <div class="p-4 md:p-5 flex justify-between gap-x-3">
                  <div>
                    <p class="text-xs uppercase tracking-wide text-gray-500">
                      Total Students
                    </p>
                    <div class="mt-1 flex items-center gap-x-2 pt-2">
                      <h3 class="text-lg sm:text-lg font-medium text-gray-800 dark:text-gray-200">
                        47
                      </h3>
                    </div>
                  </div>
                  <div class="flex-shrink-0 flex justify-center items-center w-[46px] h-[46px] bg-blue-600 text-white rounded-full dark:bg-blue-900 dark:text-blue-200">
                    <svg
                      class="flex-shrink-0 w-5 h-5"
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
                  </div>
                </div>
              </div>
              {/* <!-- End Card --> */}

              {/* <!-- Card --> */}
              <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                <div class="p-4 md:p-5 flex justify-between gap-x-3">
                  <div>
                    <p class="text-xs uppercase tracking-wide text-gray-500">
                      Sessions
                    </p>
                    <div class="mt-1 flex items-center gap-x-2 pt-2">
                      <h3 class="mt-1 text-lg font-medium text-gray-800 dark:text-gray-200">
                        27
                      </h3>
                    </div>
                  </div>
                  <div class="flex-shrink-0 flex justify-center items-center w-[46px] h-[46px] bg-blue-600 text-white rounded-full dark:bg-blue-900 dark:text-blue-200">
                    <svg
                      class="flex-shrink-0 w-5 h-5"
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
                      <path d="M5 22h14" />
                      <path d="M5 2h14" />
                      <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
                      <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* <!-- End Card --> */}

              {/* <!-- Card --> */}
              <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                <div class="p-4 md:p-5 flex justify-between gap-x-3">
                  <div>
                    <p class="text-xs uppercase tracking-wide text-gray-500">
                      Class level
                    </p>
                    <div class="mt-1 flex items-center gap-x-2 pt-2">
                      <h3 class="text-lg sm:text-lg font-medium text-gray-800 dark:text-gray-200">
                        Form 4B
                      </h3>
                    </div>
                  </div>
                  <div class="flex-shrink-0 flex justify-center items-center w-[46px] h-[46px] bg-blue-600 text-white rounded-full dark:bg-blue-900 dark:text-blue-200">
                    <svg
                      class="flex-shrink-0 w-5 h-5"
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
                      <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
                      <path d="m12 12 4 10 1.7-4.3L22 16Z" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* <!-- End Card --> */}
            </div>
          </div>

          {/* end here */}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
