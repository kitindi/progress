import React from "react";
import Navbar from "../../components/nav/Navbar";

import SideNav from "../../components/sidenav/SideNav";

const Gradebook = () => {
  return (
    <section className="w-full h-full">
      <Navbar />
      <div className="max-w-7xl mx-auto  grid grid-cols-12 ">
        <SideNav />
        <div className="col-span-10 px-10">
          <div className="relative h-screen"></div>
        </div>
      </div>
    </section>
  );
};

export default Gradebook;
