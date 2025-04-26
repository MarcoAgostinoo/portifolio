"use client";

import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [subjectFocused, setSubjectFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="contato" ref={ref} className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold text-gray-900 mb-4 tracking-widest uppercase"
        >
          FALE COMIGO
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-gray-50 p-6 rounded shadow-sm"
          >
            <h3 className="text-xl text-gray-800 font-bold mb-2">
              Vamos conversar?
            </h3>
            <p className="text-gray-600 mb-6">
              Estou disponível para novos projetos! Entre em contato.
            </p>

            <div className="space-y-4 text-gray-800 text-sm font-medium">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex items-start gap-3"
              >
                <HiOutlineLocationMarker
                  className="text-green-500 mt-1"
                  size={20}
                />
                <p>
                  Ferraz de Vasconcelos, São Paulo,<br />Brasil
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                className="flex items-start gap-3"
              >
                <HiOutlineMail
                  className="text-green-500 mt-1"
                  size={20}
                />
                <p>marco.agostinoo@hotmail.com</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex items-start gap-3"
              >
                <HiOutlinePhone
                  className="text-green-500 mt-1"
                  size={20}
                />
                <p>+55 (11) 9 1907-2390</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Formulário */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="bg-gray-50 text-black p-6 rounded shadow-sm"
          >
            <h3 className="text-xl font-bold mb-4">Diga algo</h3>
            <div className="grid text-gray-400 grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nome *"
                className={`borde text-gray-400 border-gray-300 rounded p-2 w-full ${
                  nameFocused ? 'ring-2 ring-green-500' : ''
                }`}
                onFocus={() => setNameFocused(true)}
                onBlur={() => setNameFocused(false)}
                required
              />
              <input
                type="email"
                placeholder="Email *"
                className={`border text-gray-400 border-gray-300 rounded p-2 w-full ${
                  emailFocused ? 'ring-2 ring-green-500' : ''
                }`}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Assunto *"
              className={`border border-gray-300 rounded p-2 w-full mt-4 ${
                subjectFocused ? 'ring-2 ring-green-500' : ''
              }`}
              onFocus={() => setSubjectFocused(true)}
              onBlur={() => setSubjectFocused(false)}
              required
            />
            <textarea
              placeholder="Mensagem *"
              className={`border border-gray-300 rounded p-2 w-full mt-4 h-32 ${
                messageFocused ? 'ring-2 ring-green-500' : ''
              }`}
              onFocus={() => setMessageFocused(true)}
              onBlur={() => setMessageFocused(false)}
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded shadow-md shadow-black/20"
            >
              Enviar mensagem
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
