import React, { useState } from "react";
import contactimg1 from "../../assets/contact/contactimg1.png";
import contactimg2 from "../../assets/contact/contactimg2.png";
import contactimg3 from "../../assets/contact/contactimg3.png";
import contactimg4 from "../../assets/contact/contactimg4.png";
import Hero10 from "../sections/Hero10";
import { contactAPI } from "../../services/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const contactData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      await contactAPI.create(contactData);
      setSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err.message || "Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="mt-[70px] sm:mt-[90px] text-[32px] sm:text-[42px] md:text-[54px] lg:text-[62px] font-semibold text-[#011632] leading-[120%] tracking-[-0.02em] text-center capitalize px-4">
        Get in touch
      </h1>
      <p className="text-[16px] sm:text-[18px] font-normal text-[#3C4959] leading-[155%] tracking-[0.015em] text-center max-w-[424px] mx-auto mt-4 px-4">
        Book an Appointment to treat your teeth right now.
      </p>

      {/* Main Contact Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Side - Contact Information */}
            <div className="space-y-6">
              {/* Map */}
              <div className="w-full max-w-[503px] h-[250px] sm:h-[300px] lg:h-[325px] rounded-[10px] overflow-hidden border-2 border-[#25B4F8]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52941535.09370739!2d-161.76187464048758!3d35.91528191140015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1764139620208!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Contact Details Cards */}
              <div className="space-y-3 sm:space-y-4">
                {/* Office Timings */}
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-[10px] border border-gray-200">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1376F8] rounded-full flex items-center justify-center flex-shrink-0">
                    <img
                      src={contactimg1}
                      alt="Office Timings"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  </div>
                  <div>
                    <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#011632] mb-1">
                      Office Timings
                    </h3>
                    <p className="text-[14px] sm:text-[16px] text-[#3C4959]">
                      Monday - Saturday (9:00am to 5pm)
                    </p>
                    <p className="text-[14px] sm:text-[16px] text-[#3C4959]">
                      Sunday (Closed)
                    </p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-[10px] border border-gray-200">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1376F8] rounded-full flex items-center justify-center flex-shrink-0">
                    <img
                      src={contactimg2}
                      alt="Email Address"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  </div>
                  <div>
                    <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#011632] mb-1">
                      Email Address
                    </h3>
                    <p className="text-[14px] sm:text-[16px] text-[#3C4959]">
                      Smile01@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-[10px] border border-gray-200">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1376F8] rounded-full flex items-center justify-center flex-shrink-0">
                    <img
                      src={contactimg3}
                      alt="Phone Number"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  </div>
                  <div>
                    <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#011632] mb-1">
                      Phone Number
                    </h3>
                    <p className="text-[14px] sm:text-[16px] text-[#3C4959]">
                      0900-78601
                    </p>
                  </div>
                </div>

                {/* Live Chat */}
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-[10px] border border-gray-200">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1376F8] rounded-full flex items-center justify-center flex-shrink-0">
                    <img
                      src={contactimg4}
                      alt="Live Chat"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  </div>
                  <div>
                    <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#011632] mb-1">
                      Live chat
                    </h3>
                    <p className="text-[14px] sm:text-[16px] text-[#3C4959]">
                      +1-2064512569
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="w-full max-w-[589px] bg-white rounded-[10px] border border-gray-200 p-4 sm:p-6 lg:p-8">
              {success && (
                <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-[10px]">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {error && (
                <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-[10px]">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* First Name & Last Name */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-[232px]">
                    <label className="block text-[14px] sm:text-[16px] font-medium text-[#011632] mb-2">
                      First name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      required
                      className="w-full h-[50px] sm:h-[55px] rounded-[10px] border border-gray-300 px-4 py-3 text-[14px] sm:text-[16px] text-[#3C4959] focus:outline-none focus:ring-2 focus:ring-[#25B4F8] focus:border-transparent"
                    />
                  </div>
                  <div className="w-full sm:w-[232px]">
                    <label className="block text-[14px] sm:text-[16px] font-medium text-[#011632] mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      required
                      className="w-full h-[50px] sm:h-[55px] rounded-[10px] border border-gray-300 px-4 py-3 text-[14px] sm:text-[16px] text-[#3C4959] focus:outline-none focus:ring-2 focus:ring-[#25B4F8] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[14px] sm:text-[16px] font-medium text-[#011632] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                    className="w-full h-[50px] sm:h-[55px] rounded-[10px] border border-gray-300 px-4 py-3 text-[14px] sm:text-[16px] text-[#3C4959] focus:outline-none focus:ring-2 focus:ring-[#25B4F8] focus:border-transparent"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-[14px] sm:text-[16px] font-medium text-[#011632] mb-2">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    required
                    className="w-full h-[50px] sm:h-[55px] rounded-[10px] border border-gray-300 px-4 py-3 text-[14px] sm:text-[16px] text-[#3C4959] focus:outline-none focus:ring-2 focus:ring-[#25B4F8] focus:border-transparent"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-[14px] sm:text-[16px] font-medium text-[#011632] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full h-[50px] sm:h-[55px] rounded-[10px] border border-gray-300 px-4 py-3 text-[14px] sm:text-[16px] text-[#3C4959] focus:outline-none focus:ring-2 focus:ring-[#25B4F8] focus:border-transparent"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[14px] sm:text-[16px] font-medium text-[#011632] mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    required
                    className="w-full rounded-[10px] border border-gray-300 px-4 py-3 text-[14px] sm:text-[16px] text-[#3C4959] focus:outline-none focus:ring-2 focus:ring-[#25B4F8] focus:border-transparent resize-none h-[150px] sm:h-[200px]"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-[227px] h-[50px] sm:h-[55px] bg-[#1376F8] text-white font-semibold text-[14px] sm:text-[16px] rounded-[10px] hover:bg-[#0EA5E9] transition-colors px-[30px] py-[15px] gap-[10px] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Hero10 />
    </>
  );
};

export default Contact;
