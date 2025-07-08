"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const form = useRef(null);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jas1sfh",        // Your EmailJS service ID
        "template_va4xycb",       // Your EmailJS template ID
        form.current,
        "cxUhT-4o39srIJoIk"       // Your EmailJS public key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("EmailJS error:", error);
          toast.error("Failed to send message. Try again!", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 text-white bg-[#C4CDD3]">
      <ToastContainer />

      <div className="w-full max-w-2xl p-8 bg-[#2A2E45] shadow-lg rounded-2xl">
        <h2 className="mb-6 text-3xl font-bold text-center">Get in Touch 📬</h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                className="w-full px-4 py-2 text-white bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 text-white bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block mb-1 font-medium">Phone Number</label>
              <input
                type="tel"
                name="user_phone"
                placeholder="123-456-7890"
                className="w-full px-4 py-2 text-white bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Profession</label>
              <input
                type="text"
                name="user_profession"
                placeholder="Work Profile"
                className="w-full px-4 py-2 text-white bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Your message"
              className="w-full px-4 py-2 text-white bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
