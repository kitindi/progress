import React from "react";
import Navbar from "../../components/nav/Navbar";
import SideNav from "../../components/sidenav/SideNav";

const Dashboard = () => {
  return (
    <section className="w-full h-full">
      <Navbar />
      <div className="max-w-7xl mx-auto  grid grid-cols-12 ">
        <SideNav />
        <div className="col-span-10"></div>
      </div>
    </section>
  );
};

export default Dashboard;
