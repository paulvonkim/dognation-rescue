"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faStethoscope,
  faBowlFood,
} from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const AnimatedCounter = ({
  value,
  shouldAnimate,
}: {
  value: number;
  shouldAnimate: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (shouldAnimate) {
      const duration = 2000; // 2 seconds animation
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(progress * value);

        if (frame === totalFrames) {
          clearInterval(counter);
          setCount(value);
        } else {
          setCount(currentCount);
        }
      }, frameDuration);

      return () => clearInterval(counter);
    }

    return undefined;
  }, [shouldAnimate, value]);

  return <span>{count.toLocaleString()}+</span>;
};

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
    rootMargin: "-50px 0px",
  });

  return (
    <div ref={ref} className="grid md:grid-cols-3 gap-8">
      <div className="bg-white rounded-xl shadow-sm p-8 text-center transform transition-transform hover:scale-105">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
          <FontAwesomeIcon icon={faPaw} className="text-neutral-900 text-2xl" />
        </div>
        <h3 className="text-3xl font-bold text-gray-800 mb-1">
          <AnimatedCounter value={800} shouldAnimate={inView} />
        </h3>
        <p className="text-lg font-medium mb-2">Rescued Dogs</p>
        <p className=" text-gray-800 text-sm">
          Finding forever homes for abandoned and stray dogs
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8 text-center transform transition-transform hover:scale-105">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
          <FontAwesomeIcon
            icon={faStethoscope}
            className=" text-gray-900 text-2xl"
          />
        </div>
        <h3 className="text-3xl font-bold text-gray-800 mb-1">
          <AnimatedCounter value={300} shouldAnimate={inView} />
        </h3>
        <p className="text-lg font-medium mb-2">Medical Treatments</p>
        <p className="text-neutral-600 text-sm">
          Providing essential healthcare to dogs in need
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8 text-center transform transition-transform hover:scale-105">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
          <FontAwesomeIcon
            icon={faBowlFood}
            className=" text-gray-900 text-2xl"
          />
        </div>
        <h3 className="text-3xl font-bold text-gray-800 mb-1">
          <AnimatedCounter value={1100} shouldAnimate={inView} />
        </h3>
        <p className="text-lg font-medium mb-2">Monthly Meals Provided</p>
        <p className="text-neutral-600 text-sm">
          Ensuring no dog goes hungry with nutritious food
        </p>
      </div>
    </div>
  );
}
