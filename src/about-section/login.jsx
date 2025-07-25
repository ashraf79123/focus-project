import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const LoginPage = () => {
  const containerRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(
      formRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600"
    >
      <div
        ref={formRef}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Welcome Back 👋
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Log In
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">
          Don’t have an account? <a className="text-blue-600" href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
