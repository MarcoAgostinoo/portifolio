"use client";
import { useState, useEffect } from "react";
import { Rating, RatingStar } from "flowbite-react";

export default function AdvancedRating() {
  const [animate, setAnimate] = useState(false);

  // Trigger animation on mount after a short delay
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Define your ratings data
  const ratings = [
    { label: "5 star", percent: 70 },
    { label: "4 star", percent: 87 },
    { label: "3 star", percent: 68 },
    { label: "2 star", percent: 54 },
    { label: "1 star", percent: 54 },
  ];

  return (
    <div className="w-full flex flex-col">
      <div className="w-full">
        {/* Overall Rating */}
        <Rating className="mb-2">
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar filled={false} />
          <p className="ml-2 text-sm font-medium text-gray-600">
            4.95 out of 5
          </p>
        </Rating>
        <p className="mb-4 text-sm font-medium text-gray-600">
          1,745 global ratings
        </p>

        {/* Custom animated progress bars (3s duration) */}
        {ratings.map(({ label, percent }) => (
          <div key={label} className="flex items-center mb-2">
            <span className="text-sm font-medium text-cyan-700 dark:text-cyan-600">
              {label}
            </span>
            <div className="mx-4 h-5 w-1/2 bg-gray-300 dark:bg-gray-800 rounded relative">
              <div
                className="h-5 bg-yellow-400 rounded"
                style={{
                  width: animate ? `${percent}%` : "0%",
                  transition: "width 3s ease-out",
                }}
              />
            </div>
            <span className="text-sm font-medium text-cyan-700 dark:text-cyan-600">
              {percent}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
