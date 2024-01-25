import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../../components/nav/Navbar";
import SideNav from "../../components/sidenav/SideNav";

const Students = () => {
  const [show, setShow] = useState(false);
  const [create, setCreate] = useState(false);
  // create a new student states

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [gender, setGender] = useState(null);
  const [level, setLevel] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);

  // function to handle created data

  const createStudent = (e) => {
    e.preventDefault();
    const newStudent = {
      id: uuidv4(),
      firstName,
      lastName,
      email,
      phone,
      gender,
    };

    console.log(newStudent);
    createModel();
  };

  const createModel = () => {
    setCreate(!create);
  };
  const location = useLocation();

  useEffect(() => {
    require("preline/preline");
  }, []);

  useEffect(() => {
    // @ts-ignore
    // eslint-disable-next-line no-undef
    HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <section className="w-full min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-8xl mx-auto  grid grid-cols-12 ">
        <SideNav />
        <div className="col-span-10 px-16 py-10">
          {/* table */}
          <div class="  border border-gray-200 sm:rounded-lg">
            <div class="z-10 flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">
              <div class="w-full px-2 py-4  sm:flex sm:justify-between sm:items-center border-b border-gray-200 dark:border-gray-700">
                <div className="w-[400px] relative">
                  <label class="sr-only">Search</label>
                  <input
                    type="text"
                    name="hs-table-with-pagination-search"
                    id="hs-table-with-pagination-search"
                    class="py-2 px-3 ps-9 block w-full border border-gray-300 shadow-sm rounded-lg text-sm focus:border-gray-400 "
                    placeholder="Search by First Name"
                  />
                  <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                    <svg
                      class="h-4 w-4 text-gray-400"
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
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div class="inline-flex gap-x-2">
                    <button
                      class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      <svg
                        class="h-4 w-4 text-white"
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
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                      Search student
                    </button>
                  </div>
                  <div class="inline-flex gap-x-2">
                    <button
                      class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                      onClick={createModel}
                    >
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
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                      Add student
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Student Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Class
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Gender
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Prent's Contact
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class=" px-6 py-4  dark:text-white">
                    <div class="flex items-center">Neil Sims</div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center">Form 4B</div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center">Male</div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center">sims.ceo@hotmail.com</div>
                  </td>
                  <td class="px-6 py-4">
                    {/* <!-- Modal toggle --> */}
                    <button
                      href="#"
                      type="button"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      onClick={() => setShow(!show)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class=" px-6 py-4  dark:text-white">
                    <div class="flex items-center">Neil Sims</div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center">Form 4B</div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center">Male</div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center">sims.ceo@hotmail.com</div>
                  </td>
                  <td class="px-6 py-4">
                    {/* <!-- Modal toggle --> */}
                    <button
                      href="#"
                      type="button"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      onClick={() => setShow(!show)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class=" px-6 py-4  dark:text-white">
                    <div class="flex items-center">Neil Sims</div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center">Form 4B</div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center">Male</div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center">sims.ceo@hotmail.com</div>
                  </td>
                  <td class="px-6 py-4">
                    {/* <!-- Modal toggle --> */}
                    <button
                      href="#"
                      type="button"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      onClick={() => setShow(!show)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class=" px-6 py-4  dark:text-white">
                    <div class="flex items-center">Neil Sims</div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center">Form 4B</div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center">Male</div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center">sims.ceo@hotmail.com</div>
                  </td>
                  <td class="px-6 py-4">
                    {/* <!-- Modal toggle --> */}
                    <button
                      href="#"
                      type="button"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      onClick={() => setShow(!show)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <div class="py-1 px-4">
                    <nav class="flex items-center space-x-1">
                      <button
                        type="button"
                        class="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <span aria-hidden="true">«</span>
                        <span class="sr-only">Previous</span>
                      </button>
                      <button
                        type="button"
                        class="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10"
                        aria-current="page"
                      >
                        1
                      </button>
                      <button
                        type="button"
                        class="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10"
                      >
                        2
                      </button>
                      <button
                        type="button"
                        class="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10"
                      >
                        3
                      </button>
                      <button
                        type="button"
                        class="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <span class="sr-only">Next</span>
                        <span aria-hidden="true">»</span>
                      </button>
                    </nav>
                  </div>
                </tr>
              </tbody>
            </table>
            {/* <!-- Edit user modal --> */}
            <div
              id="editUserModal"
              tabindex="-1"
              class={`fixed top-0 left-0 right-0 z-50 items-center justify-center ${
                show === false ? "hidden" : "absolute"
              } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex  justify-center items-center z-50 bg-black opacity-95`}
            >
              <div class=" w-full max-w-2xl max-h-full z-30">
                {/* <!-- Modal content --> */}
                <form class=" bg-white rounded-lg shadow dark:bg-gray-700">
                  {/* <!-- Modal header --> */}
                  <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                      Update student
                    </h3>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="editUserModal"
                      onClick={() => setShow(!show)}
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  {/* <!-- Modal body --> */}
                  <div class="p-6 space-y-6">
                    <div class="grid grid-cols-6 gap-6">
                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="first-name"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Bonnie"
                          required=""
                        />
                      </div>
                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="last-name"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Green"
                          required=""
                        />
                      </div>
                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="gender"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Gender
                        </label>
                        <input
                          type="text"
                          name="gender"
                          id="gender"
                          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Male or Female"
                          required=""
                        />
                      </div>
                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="class"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Class
                        </label>
                        <input
                          type="text"
                          name="class"
                          id="phone-number"
                          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Form 4B"
                          required=""
                        />
                      </div>
                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="email"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="scot@gmail.com"
                          required=""
                        />
                      </div>
                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="Phone"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Phone Number
                        </label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="+255 764 282 222"
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                  {/* <!-- Modal footer --> */}
                  <div class="flex items-center p-6 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      type="submit"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
              {/* end of edit modal */}
              {/* create modal start */}
            </div>
            {/* end table */}
          </div>
        </div>
      </div>
      {/* create modal */}
      <div
        id="editUserModal"
        tabindex="-1"
        class={`fixed top-0 left-0 right-0 z-50 items-center justify-center ${
          create === false ? "hidden" : "absolute"
        } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex  justify-center items-center z-50 bg-black opacity-95`}
      >
        <div class=" w-full max-w-2xl max-h-full z-30">
          {/* <!-- Modal content --> */}
          <form class=" bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Create Student
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="editUserModal"
                onClick={() => setCreate(!create)}
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="p-6 space-y-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    id="first-name"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Bonnie"
                    required=""
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="last-name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Green"
                    required=""
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="gender"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Gender
                  </label>
                  <input
                    type="text"
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    id="gender"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Male or Female"
                    required=""
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="class"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Class
                  </label>
                  <input
                    type="text"
                    name="class"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    id="phone-number"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Form 4B"
                    required=""
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="scot@gmail.com"
                    required=""
                  />
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="Phone"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    id="phone"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="+255 764 282 222"
                    required=""
                  />
                </div>
              </div>
            </div>
            {/* <!-- Modal footer --> */}
            <div class="flex items-center p-6 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                type="submit"
                onClick={createStudent}
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save
              </button>
            </div>
          </form>
        </div>
        {/* create model ends */}
      </div>
      {/* end of create modal */}
    </section>
  );
};

export default Students;
