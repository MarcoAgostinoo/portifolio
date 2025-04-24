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

  const ratings = [
    { label: "5 estrelas", percent: 70 },
    { label: "4 estrelas", percent: 87 },
    { label: "3 estrelas", percent: 68 },
    { label: "2 estrelas", percent: 54 },
    { label: "1 estrela", percent: 54 },
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
          <RatingStar filled={false} />
          <p className="ml-2 text-sm font-medium text-gray-600">
            4.95 de 5
          </p>
        </Rating>
        <p className="mb-4 text-sm font-medium text-gray-600">
          1.745 avaliações globais
        </p>

        {ratings.map(({ label, percent }) => (
          <motion.div
            key={label}
            className="flex flex-col sm:flex-row items-start sm:items-center mb-4"
            initial="initial"
            animate={animate ? "animate" : "initial"}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span
              className="text-sm font-medium text-cyan-700 dark:text-cyan-600 w-full sm:w-1/4 mb-1 sm:mb-0"
              variants={textVariants}
            >
              {label}
            </motion.span>
            <div className="mx-0 sm:mx-4 h-5 w-full sm:w-2/3 bg-gray-300 dark:bg-gray-800 rounded relative">
              <motion.div
                className="h-5 bg-yellow-400 rounded"
                variants={barVariants}
                custom={percent}
                transition={{ duration: 3, ease: "easeOut" }}
              />
            </div>
            <motion.span
              className="text-sm font-medium text-cyan-700 dark:text-cyan-600 w-full sm:w-1/6 mt-1 sm:mt-0 text-right"
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
