import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import loginImage from "../../assets/about/aboutimg1.png"; // You can replace with proper login image

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen bg-[#F0F8FF] flex flex-col lg:flex-row pt-16">
      {/* Left Side - Image Section (Hidden on mobile, visible on desktop) */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-8">
        <img
          src={loginImage}
          alt="Dental Professional"
          className="w-full max-w-[710px] h-auto max-h-[860px] object-cover rounded-[10px]"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
        <div className="w-full max-w-[480px]">
          {/* Logo/Header */}
          <div className="mb-8">
            <h1 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold text-[#011632] mb-2">
              Welcome Back
            </h1>
            <p className="text-[16px] sm:text-[18px] text-[#3C4959]">
              Discover a better way of spendings with Uifry.
            </p>
          </div>

          {/* Google Sign In Button */}
          <button className="w-full h-[55px] flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-[10px] text-[16px] font-medium text-[#011632] hover:bg-gray-50 transition mb-6">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M18.1713 8.36791H17.5001V8.33325H10.0001V11.6666H14.7096C14.023 13.6069 12.1763 14.9999 10.0001 14.9999C7.23884 14.9999 5.00009 12.7612 5.00009 9.99992C5.00009 7.23867 7.23884 4.99992 10.0001 4.99992C11.2746 4.99992 12.4342 5.48092 13.3171 6.26625L15.6742 3.90917C14.1859 2.52192 12.1951 1.66659 10.0001 1.66659C5.39801 1.66659 1.66676 5.39784 1.66676 9.99992C1.66676 14.602 5.39801 18.3333 10.0001 18.3333C14.6022 18.3333 18.3334 14.602 18.3334 9.99992C18.3334 9.44117 18.2763 8.89575 18.1713 8.36791Z"
                fill="#FFC107"
              />
              <path
                d="M2.6275 6.12117L5.36542 8.12909C6.10625 6.29492 7.90042 4.99992 10.0004 4.99992C11.2754 4.99992 12.4346 5.48092 13.3175 6.26625L15.6746 3.90917C14.1862 2.52192 12.1954 1.66659 10.0004 1.66659C6.79875 1.66659 4.02292 3.47367 2.6275 6.12117Z"
                fill="#FF3D00"
              />
              <path
                d="M10.0004 18.3333C12.1529 18.3333 14.1088 17.5095 15.5879 16.17L13.0079 13.9875C12.1431 14.6452 11.0864 15.0009 10.0004 15C7.83294 15 5.99169 13.6179 5.29961 11.6891L2.58211 13.7829C3.96044 16.4816 6.76127 18.3333 10.0004 18.3333Z"
                fill="#4CAF50"
              />
              <path
                d="M18.1713 8.36791H17.5001V8.33325H10.0001V11.6666H14.7096C14.3809 12.5902 13.7889 13.3972 13.0067 13.9879L13.0079 13.9871L15.5879 16.1696C15.4046 16.3362 18.3334 14.1666 18.3334 9.99992C18.3334 9.44117 18.2763 8.89575 18.1713 8.36791Z"
                fill="#1976D2"
              />
            </svg>
            Log in with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-[14px] text-[#3C4959]">Or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Login Form */}
          <form className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="block text-[14px] sm:text-[16px] font-medium text-[#011632] mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full h-[55px] pl-12 pr-4 rounded-[10px] border border-gray-300 text-[16px] text-[#3C4959] focus:outline-none focus:ring-2 focus:ring-[#1376F8] focus:border-transparent"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-[14px] sm:text-[16px] font-medium text-[#011632] mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full h-[55px] pl-12 pr-4 rounded-[10px] border border-gray-300 text-[16px] text-[#3C4959] focus:outline-none focus:ring-2 focus:ring-[#1376F8] focus:border-transparent"
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-[#1376F8] focus:ring-[#1376F8]"
                />
                <span className="text-[14px] text-[#3C4959]">Remember Me</span>
              </label>
              <a
                href="#"
                className="text-[14px] text-[#1376F8] hover:underline font-medium"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full h-[55px] bg-[#1376F8] text-white font-semibold text-[16px] rounded-[10px] hover:bg-[#0EA5E9] transition-colors"
            >
              Log in
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-[14px] text-[#3C4959]">
              Not member yet?{" "}
              <a
                href="/signup"
                className="text-[#1376F8] font-semibold hover:underline"
              >
                Create an account
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
