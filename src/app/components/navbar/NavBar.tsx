"use client";
import Image from "next/image";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaSkype,
} from "react-icons/fa";
import {
  FiHome,
  FiUser,
  FiFileText,
  FiGrid,
  FiSettings,
  FiMail,
} from "react-icons/fi";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    closed: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const menuItems = [
    { label: "Sobre", icon: <FiHome size={18} />, href: "/#hero" },
    { label: "Formação", icon: <FiUser size={18} />, href: "/#timeline" },
    { label: "Habilidades", icon: <FiFileText size={18} />, href: "/#habilidades" },
    { label: "Serviços", icon: <FiSettings size={18} />, href: "/#services" },
    { label: "Portfólio", icon: <FiGrid size={18} />, href: "/#portfolio" },
    { label: "Contato", icon: <FiMail size={18} />, href: "/#contato" },
  ];

  // Função para rolagem suave
  const handleScroll = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      {/* Navbar / Sidebar Container */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white shadow-lg p-4 flex items-center justify-between lg:flex-col lg:justify-start lg:w-72 lg:h-screen lg:p-6">
        {/* Logo + Hamburger */}
        <div className="flex items-center justify-between w-full lg:flex-col lg:items-start">
          <h2 className="text-2xl font-sans font-bold tracking-wide lg:mb-8">
            MyPortfolio
          </h2>
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Perfil (Desktop) */}
        <div className="hidden lg:flex flex-col items-center mt-6">
          <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-gray-600">
            <Image
              src="/imgnav.png"
              alt="Avatar"
              width={240}
              height={240}
              className="object-cover"
            />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Marco Melo</h3>
          <div className="mt-4 flex space-x-3">
            <a href="#" aria-label="X (Twitter)">
              <FaTwitter
                size={20}
                className="hover:text-blue-400 transition-colors"
              />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF
                size={20}
                className="hover:text-blue-400 transition-colors"
              />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram
                size={20}
                className="hover:text-blue-400 transition-colors"
              />
            </a>
            <a href="#" aria-label="Skype">
              <FaSkype
                size={20}
                className="hover:text-blue-400 transition-colors"
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin
                size={20}
                className="hover:text-blue-400 transition-colors"
              />
            </a>
          </div>
        </div>

        {/* Menu (Desktop) */}
        <ul className="hidden lg:flex lg:flex-col lg:space-y-4 lg:mt-8">
          {menuItems.map(({ label, icon, href }) => {
            const id = href.split("#")[1]; // Extrai o id do href
            return (
              <motion.li
                key={label}
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2 font-sans text-lg font-medium tracking-wide cursor-pointer hover:text-blue-400 transition-colors">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(id);
                  }}
                  className="flex items-center space-x-2">
                  {icon}
                  <span>{label}</span>
                </a>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-[60px] left-0 right-0 bg-gray-800 text-white p-4 shadow-lg z-40 lg:hidden">
            {menuItems.map(({ label, href }) => {
              const id = href.split("#")[1];
              return (
                <li
                  key={label}
                  className="mb-4 flex items-center space-x-2 font-sans text-base font-medium cursor-pointer hover:text-blue-400 transition-colors">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(id);
                      setIsMenuOpen(false); // Fecha o menu após clicar
                    }}>
                    {label}
                  </a>
                </li>
              );
            })}
            <div className="mt-4 flex space-x-4">
              <a href="#" aria-label="GitHub">
                <FaGithub
                  size={18}
                  className="hover:text-blue-400 transition-colors"
                />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin
                  size={18}
                  className="hover:text-blue-400 transition-colors"
                />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter
                  size={18}
                  className="hover:text-blue-400 transition-colors"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram
                  size={18}
                  className="hover:text-blue-400 transition-colors"
                />
              </a>
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}