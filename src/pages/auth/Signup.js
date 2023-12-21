import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Hexagon } from "@phosphor-icons/react";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <section class="">
      <div class=" items-center px-5 py-12 lg:px-20">
        <div class="flex flex-col w-full max-w-lg p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
          <div class="sm:mx-auto sm:w-full sm:max-w-lg">
            <h1 className="mt-6 text-4xl font-bold  text-neutral-600 flex items-center gap-2 text-center justify-center mb-12">
              <Hexagon size={36} color="#2563eb" weight="fill" /> progress
            </h1>
            <h2 class="mt-6 text-2xl font-semibold  text-neutral-600 text-center">
              Create your account
            </h2>
          </div>
          <div class="mt-8">
            <div class="mt-6">
              <form action="#" method="POST" class="space-y-6">
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div class="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      required=""
                      placeholder="Your Email"
                      class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div class="space-y-1">
                  <label
                    for="password"
                    class="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Password{" "}
                  </label>
                  <div class="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autocomplete="current-password"
                      required=""
                      placeholder="Your Password"
                      class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>
                <div class="space-y-1">
                  <label
                    for="password2"
                    class="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Confirm Password{" "}
                  </label>
                  <div class="mt-1">
                    <input
                      id="password2"
                      name="password2"
                      type="password"
                      required=""
                      placeholder="Confirm Password"
                      class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={() => navigate("/onboard")}
                  >
                    Create account
                  </button>
                </div>
                <div class="flex items-center gap-8">
                  <div class="flex items-center">
                    <label
                      for="remember-me"
                      class="block ml-2 text-sm text-neutral-600"
                    >
                      {" "}
                      Already have an account?
                    </label>
                  </div>

                  <div class="text-sm">
                    <Link
                      to="/"
                      class="font-medium text-blue-600 hover:text-blue-500"
                    >
                      {" "}
                      Sign in
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
