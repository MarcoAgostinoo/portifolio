"use client";

import { useState } from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [subjectFocused, setSubjectFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1, // Inicia a animação quando 20% do componente está visível
    triggerOnce: true, // Animação acontece apenas uma vez
  });

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} // Duração aumentada para 0.5 segundos
          className="text-3xl font-semibold text-gray-900 mb-4 tracking-widest uppercase"
        >
          Get in touch.
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }} // Duração de 1 segundo com delay
            className="bg-gray-50 p-6 rounded shadow-sm"
          >
            <h3 className="text-xl font-bold mb-2">What’s your story?<br />Get in touch</h3>
            <p className="text-gray-600 mb-6">Always available for freelancing if the right project comes along. Feel free to contact me.</p>

            <div className="space-y-4 text-gray-800 text-sm font-medium">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }} // Duração de 1 segundo com delay
                className="flex items-start gap-3"
              >
                <HiOutlineLocationMarker className="text-green-600 mt-1" size={20} />
                <p>123 Stree New York City,<br />United States Of America 750065.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.3 }} // Duração de 1 segundo com delay
                className="flex items-start gap-3"
              >
                <HiOutlineMail className="text-green-600 mt-1" size={20} />
                <p>support@domain.com</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }} // Duração de 1 segundo com delay
                className="flex items-start gap-3"
              >
                <HiOutlinePhone className="text-green-600 mt-1" size={20} />
                <p>+044 9696 9696 3636</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }} // Duração de 1 segundo com delay
            className="bg-indigo-50 p-6 rounded shadow-sm"
          >
            <h3 className="text-xl font-bold mb-4">Say Something</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name *"
                className={`border border-gray-300 rounded p-2 w-full ${nameFocused ? 'ring-2 ring-green-500' : ''}`}
                onFocus={() => setNameFocused(true)}
                onBlur={() => setNameFocused(false)}
                required
              />
              <input
                type="email"
                placeholder="Email *"
                className={`border border-gray-300 rounded p-2 w-full ${emailFocused ? 'ring-2 ring-green-500' : ''}`}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject *"
              className={`border border-gray-300 rounded p-2 w-full mt-4 ${subjectFocused ? 'ring-2 ring-green-500' : ''}`}
              onFocus={() => setSubjectFocused(true)}
              onBlur={() => setSubjectFocused(false)}
              required
            />
            <textarea
              placeholder="Your message *"
              className={`border border-gray-300 rounded p-2 w-full mt-4 h-32 ${messageFocused ? 'ring-2 ring-green-500' : ''}`}
              onFocus={() => setMessageFocused(true)}
              onBlur={() => setMessageFocused(false)}
              required
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow-md shadow-black/20"
            >
              send message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}