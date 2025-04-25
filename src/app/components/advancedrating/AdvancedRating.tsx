"use client";
import { useEffect, useState } from "react";
import { Rating, RatingStar } from "flowbite-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AdvancedRating() {
  const [animate, setAnimate] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  const softSkills = [
    { label: "Comunicação", percent: 92 },
    { label: "Empatia e Atendimento", percent: 95 },
    { label: "Organização", percent: 90 },
    { label: "Trabalho em Equipe", percent: 88 },
    { label: "Proatividade", percent: 93 },
  ];

  const barVariants = {
    initial: { width: 0 },
    animate: (percent: number) => ({ width: `${percent}%` }),
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full flex flex-col" ref={ref}>
      <div className="w-full">
        <Rating className="mb-2">
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <p className="ml-2 text-sm font-medium text-gray-600">
            Excelente desempenho interpessoal
          </p>
        </Rating>
        <p className="mb-4 text-sm font-medium text-gray-600">
          Baseado em feedbacks e experiências reais
        </p>

        {softSkills.map(({ label, percent }) => (
          <motion.div
            key={label}
            className="flex flex-col sm:flex-row items-start sm:items-center mb-4"
            initial="initial"
            animate={animate ? "animate" : "initial"}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span
              className="text-sm font-medium text-blue-700 dark:text-blue-400 w-full sm:w-1/4 mb-1 sm:mb-0"
              variants={textVariants}
            >
              {label}
            </motion.span>
            <div className="mx-0 sm:mx-4 h-5 w-full sm:w-2/3 bg-gray-300 dark:bg-gray-800 rounded relative">
              <motion.div
                className="h-5 bg-emerald-500 rounded"
                variants={barVariants}
                custom={percent}
                transition={{ duration: 3, ease: "easeOut" }}
              />
            </div>
            <motion.span
              className="text-sm font-medium text-blue-700 dark:text-blue-400 w-full sm:w-1/6 mt-1 sm:mt-0 text-right"
              variants={textVariants}
            >
              {percent}%
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
