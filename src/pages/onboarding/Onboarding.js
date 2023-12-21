import Navbar from "../../components/nav/Navbar";
import SideNav from "../../components/sidenav/SideNav";

const Onboarding = () => {
  return (
    <section className="w-full h-full">
      <Navbar />
      <div className="max-w-7xl mx-auto  grid grid-cols-12 ">
        <SideNav />
        <div className="col-span-10 px-20 py-10">
          <div>
            <h3 className="text-xl text-center font-semibold">
              Welcome on Board
            </h3>
          </div>
          <div className="w-full bg-blue-200 p-20 rounded-md">
            <form action="">
              <div>
                <label htmlFor="">Username</label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
