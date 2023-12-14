import { useState } from "react";
import { Link } from "react-router-dom";
import { Hexagon } from "@phosphor-icons/react";

const Auth = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const authUser = (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <section className="">
      <div className=" items-center px-5 py-12 lg:px-20">
        <div className="flex flex-col w-full max-w-lg p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
          <div className="sm:mx-auto sm:w-full sm:max-w-2xl text-center">
            <h1 className="mt-6 text-4xl font-bold  text-neutral-600 flex items-center gap-2 text-center justify-center mb-12">
              <Hexagon size={36} color="#2563eb" weight="fill" /> progress
            </h1>
            <h2 className="mt-6 text-3xl font-semibold  text-neutral-600 text-center">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-8">
            <div className="mt-6">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      required=""
                      placeholder="Your Email"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Password{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      autoComplete="current-password"
                      required=""
                      placeholder="Your Password"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      placeholder="Your password"
                      className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                    />
                    <label
                      htmlFor="remember-me"
                      className="block ml-2 text-sm text-neutral-600"
                    >
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link
                      to=""
                      className="font-medium text-blue-600 hover:text-blue-500"
                    >
                      {" "}
                      Forgot your password?{" "}
                    </Link>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    onClick={authUser}
                    className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Sign in
                  </button>
                </div>
                <div className="flex items-center gap-8">
                  <div className="flex items-center">
                    <label
                      htmlFor="remember-me"
                      className="block ml-2 text-sm text-neutral-600"
                    >
                      {" "}
                      Don't have account already?
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link
                      to="/signup"
                      className="font-medium text-blue-600 hover:text-blue-500"
                    >
                      {" "}
                      Sign up
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

export default Auth;
