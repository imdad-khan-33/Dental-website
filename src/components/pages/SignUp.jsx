import React, { useState } from "react";
import { User, Mail, Lock } from "lucide-react";
import signupImage from "../../assets/about/login.png"; // You can replace with proper signup image

const SignUp = () => {
  const [agreeTerms, setAgreeTerms] = useState(false);

  return (
    <div className="min-h-screen bg-[#F0F8FF] flex flex-col lg:flex-row pt-16">
      {/* Left Side - Image Section (Hidden on mobile, visible on desktop) */}
      <div className="hidden lg:flex lg:w-1/2 relative items-start justify-center p-8 pt-[170px]">
        <div className="w-[710px] h-[882px] relative">
          <img
            src={signupImage}
            alt="Dental Professional"
            className="w-full h-full object-cover rounded-tr-[10px]"
          />

          {/* Quote Overlay */}
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <blockquote className="text-[20px] sm:text-[24px] font-medium leading-[140%] mb-4">
              "Effort is like toothpaste; you can usually squeeze out just a
              little bit more."
            </blockquote>
            <p className="text-[16px] sm:text-[18px] font-normal">
              ~ Dr Andre Jackson
            </p>
            <p className="text-[14px] sm:text-[16px] text-gray-200 mt-1">
              Manager of Smile Pvt Ltd
            </p>

            {/* Navigation Dots */}
            <div className="flex gap-2 mt-6">
              <button className="w-8 h-8 rounded-full bg-white/30 hover:bg-white/50 transition"></button>
              <button className="w-8 h-8 rounded-full bg-white hover:bg-white/80 transition"></button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex items-start justify-center px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:pt-[270px]">
        <div className="w-full max-w-[416px]">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold text-[#011632] mb-2">
              Create An Account
            </h1>
            <p className="text-[14px] sm:text-[16px] text-[#3C4959]">
              Discover a better way of spendings with Uifry.
            </p>
          </div>

          {/* Google Sign Up Button */}
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
            Sign up with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-[14px] text-[#3C4959]">Or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Sign Up Form */}
          <form className="space-y-4">
            {/* Name Input */}
            <div>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Type your name"
                  className="w-full h-[55px] pl-12 pr-4 rounded-[10px] border border-gray-300 text-[16px] text-[#3C4959] focus:outline-none focus:ring-2 focus:ring-[#1376F8] focus:border-transparent"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
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
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full h-[55px] pl-12 pr-4 rounded-[10px] border border-gray-300 text-[16px] text-[#3C4959] focus:outline-none focus:ring-2 focus:ring-[#1376F8] focus:border-transparent"
                />
              </div>
            </div>

            {/* Terms & Privacy Checkbox */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="w-4 h-4 mt-1 rounded border-gray-300 text-[#1376F8] focus:ring-[#1376F8]"
              />
              <label className="text-[14px] text-[#3C4959]">
                I agree with Terms and Privacy
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full h-[55px] bg-[#1376F8] text-white font-semibold text-[16px] rounded-[10px] hover:bg-[#0EA5E9] transition-colors"
            >
              Sign up
            </button>

            {/* Sign In Link */}
            <p className="text-center text-[14px] text-[#3C4959]">
              Have account?{" "}
              <a
                href="/login"
                className="text-[#1376F8] font-semibold hover:underline"
              >
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
