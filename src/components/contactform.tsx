import React from "react";

const ContactForm = () => {
  return (
    <div id="contact" className="flex flex-col md:flex-row justify-center items-center lg:gap-28 lg:mt-44">
      {/* Left Section */}
      <div className="max-w-3xl text-center md:text-left space-y-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          How to get in Touch
        </h2>
        <p className="text-gray-700 max-w-2xl text-xl leading-relaxed tracking-wider">
          To request more information, schedule an appointment, inquire about
          supervision, or any other general questions you may have, please fill
          out the form and I'll respond as soon as possible.
        </p>
        <div className="text-gray-700 dark:text-gray-300 text-xl space-y-2">
          <p className="flex items-center">
            <span className="text-blue-500 mr-2">📍</span> New Delhi, India
          </p>
          <p className="flex items-center">
            <span className="text-blue-500 mr-2">📞</span> +91 9870571657
          </p>
          <p className="flex items-center">
            <span className="text-blue-500 mr-2">📧</span>{" "}
            tarotdivine2008@gmail.com
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full max-w-3xl bg-white border border-teal-500 dark:bg-gray-800 p-6 rounded-lg shadow-3xl">
        <form className="space-y-8">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              First & Last Name *
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="reason"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Reason for reaching out *
            </label>
            <input
              type="text"
              id="reason"
              className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Tell me a bit more about why you are reaching out *
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-teal-700 text-white rounded-md shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;