import React from "react";
import Navbar from "../../components/nav/Navbar";
import SideNav from "../../components/sidenav/SideNav";

const Calendar = () => {
  return (
    <section className="w-full h-full bg-gray-100">
      <Navbar />
      <div className="max-w-8xl mx-auto  grid grid-cols-12 ">
        <SideNav />
        <div className="col-span-10 px-20">
          {/* start here */}
          {/* <!-- Card Section --> */}

          {/* end here */}
        </div>
      </div>
    </section>
  );
};

export default Calendar;
