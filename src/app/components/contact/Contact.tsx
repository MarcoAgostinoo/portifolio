// app/components/ContactForm.tsx
"use client";

import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

export default function Contact() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-widest uppercase">
          Get in touch.
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Contact Info */}
          <div className="bg-gray-50 p-6 rounded shadow-sm">
            <h3 className="text-xl font-bold mb-2">What’s your story?<br />Get in touch</h3>
            <p className="text-gray-600 mb-6">Always available for freelancing if the right project comes along. Feel free to contact me.</p>

            <div className="space-y-4 text-gray-800 text-sm font-medium">
              <div className="flex items-start gap-3">
                <HiOutlineLocationMarker className="text-green-600 mt-1" size={20} />
                <p>123 Stree New York City,<br />United States Of America 750065.</p>
              </div>
              <div className="flex items-start gap-3">
                <HiOutlineMail className="text-green-600 mt-1" size={20} />
                <p>support@domain.com</p>
              </div>
              <div className="flex items-start gap-3">
                <HiOutlinePhone className="text-green-600 mt-1" size={20} />
                <p>+044 9696 9696 3636</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form className="bg-indigo-50 p-6 rounded shadow-sm">
            <h3 className="text-xl font-bold mb-4">Say Something</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name *"
                className="border border-gray-300 rounded p-2 w-full"
                required
              />
              <input
                type="email"
                placeholder="Email *"
                className="border border-gray-300 rounded p-2 w-full"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject *"
              className="border border-gray-300 rounded p-2 w-full mt-4"
              required
            />
            <textarea
              placeholder="Your message *"
              className="border border-gray-300 rounded p-2 w-full mt-4 h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow-md shadow-black/20 active:translate-y-0.5"
            >
              send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
