// components/WhatIDo.jsx
import { AiOutlineLayout } from "react-icons/ai";
import { FaDesktop, FaBullseye } from "react-icons/fa";

const services = [
  {
    title: "Web Design",
    icon: AiOutlineLayout,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Desenvolvimento Web",
    icon: FaDesktop,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Marketing de SEO",
    icon: FaBullseye,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Web Design",
    icon: AiOutlineLayout,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Desenvolvimento Web",
    icon: FaDesktop,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Marketing de SEO",
    icon: FaBullseye,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function WhatIDo() {
  return (
    <section id="services" className="bg-white text-gray-900 py-16">
      {/* Título */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-semibold inline-block relative pb-2">
          O QUE EU FAÇO?
          <span className="absolute bottom-0 left-0 w-12 h-1 bg-green-500"></span>
        </h2>
      </div>

      {/* Grid de cards */}
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={idx}
              className="
                flex items-start p-6 rounded-lg border border-gray-200 bg-gray-50
                transition-colors hover:bg-green-500 hover:text-white cursor-pointer
              "
            >
              <Icon size={28} className="flex-shrink-0 mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm">{service.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
