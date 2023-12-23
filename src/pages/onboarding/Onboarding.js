import { useNavigate } from "react-router-dom";
import Navbar from "../../components/nav/Navbar";
import SideNav from "../../components/sidenav/SideNav";
import { Camera } from "@phosphor-icons/react";

const Onboarding = () => {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/dashboard");
  };
  return (
    <section className="w-full h-full">
      <Navbar />
      <div className="max-w-7xl mx-auto  grid grid-cols-12 ">
        <SideNav />
        <div className="col-span-10 px-40 py-4">
          <div className="mb-4">
            <h3 className="text-xl text-center font-semibold">
              Welcome on Board 🎉
            </h3>
          </div>
          <div className="w-full bg-blue-200 px-10 py-8 rounded-md">
            <h3 className="text-lg text-slate-700 text-center font-medium">
              Set up your profile
            </h3>

            <form action="">
              <div className="w-full flex justify-center py-4">
                <label
                  htmlFor="file"
                  className="w-16 h-16 rounded-full border-2 border-dotted border-slate-950 bg-white flex items-center justify-center cursor-pointer"
                  title="add your profile"
                >
                  <Camera size={18} color="#1a1919" />
                </label>
                <input type="file" name="" id="" className="hidden" />
              </div>
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-6 p-4 flex flex-col gap-3">
                  <label
                    htmlFor="username"
                    className="text-sm font-medium text-neutral-600"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="px-5 py-3 text-base rounded-sm focus:outline-none"
                  />
                </div>
                <div className="col-span-6 p-4 flex flex-col gap-3">
                  <label
                    htmlFor="username"
                    className="text-sm font-medium text-neutral-600"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="px-5 py-3 text-base rounded-sm focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-6 p-4 flex flex-col gap-3">
                  <label
                    htmlFor="username"
                    className="text-sm font-medium text-neutral-600"
                  >
                    Class
                  </label>
                  <select
                    name=""
                    id=""
                    className="px-5 py-3 text-base rounded-sm focus:outline-none"
                  >
                    <option value="Form 4A">FORM 4A</option>
                    <option value="Form 4B">FORM 4B</option>
                    <option value="Form 4C">FORM 4C</option>
                    <option value="Form 3A">FORM 3A</option>
                    <option value="Form 3B">FORM 3B</option>
                    <option value="Form 3C">FORM 3C</option>
                  </select>
                </div>
                <div className="col-span-6 p-4 flex flex-col gap-3">
                  <label
                    htmlFor="username"
                    className="text-sm font-medium text-neutral-600"
                  >
                    Academic Year
                  </label>
                  <select
                    name=""
                    id=""
                    className="px-5 py-3 text-base rounded-sm focus:outline-none"
                  >
                    <option value="2023/2024">2023/2024</option>
                    <option value="2023/2024">2024/2025</option>
                    <option value="2023/2024">2025/2026</option>
                    <option value="2023/2024">2026/2027</option>
                  </select>
                </div>
              </div>
              <div className="p-4">
                <button
                  className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
                  onClick={handleProfile}
                >
                  {" "}
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
