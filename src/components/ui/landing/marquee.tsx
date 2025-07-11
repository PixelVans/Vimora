"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type MarqueeItem = {
  image: string;
  name: string;
  title: string;
  quote: string;
};

export type FeatureMarqueeRowProps = {
  items: Feature[];
  reverse?: boolean;
  speed?: number;
};

export type MarqueeRowProps = {
  items: MarqueeItem[];
  reverse?: boolean;
  speed?: number;
};

export function FeatureMarqueeRow({
  items,
  reverse = false,
  speed = 50,
}: FeatureMarqueeRowProps) {
  const controls = useAnimation();
  const rowRef = useRef(null);

  useEffect(() => {
    controls.start({
      x: reverse ? "100%" : "-100%",
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      },
    });
  }, [controls, reverse, speed]);

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={controls}
        ref={rowRef}
        style={{ willChange: "transform" }}
      >
        {[...items, ...items].map((feature, i) => {
          const Icon = feature.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md w-[300px] flex-shrink-0 p-6 text-center flex flex-col items-center space-y-3"
            >
              <Icon className="w-8 h-8 text-blue-600" />
              <h3 className="font-semibold text-slate-900">{feature.title}</h3>
              <p className="text-sm text-slate-600">{feature.description}</p>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export function MarqueeRow({
  items,
  reverse = false,
  speed = 50,
}: MarqueeRowProps) {
  const controls = useAnimation();
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    controls.start({
      x: reverse ? "100%" : "-100%",
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      },
    });
  }, [controls, reverse, speed]);

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={controls}
        ref={rowRef}
        style={{ willChange: "transform" }}
      >
        {[...items, ...items].map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md w-[300px] flex-shrink-0 p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-9 h-9 rounded-full object-cover border border-slate-900"
              />
              <div>
                <p className="font-semibold text-slate-800">{t.name}</p>
                <p className="text-xs text-slate-500">{t.title}</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm italic">&ldquo;{t.quote}&rdquo;</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function EssentialsMarqueeRow({
  items,
  reverse = false,
  speed = 40,
}: {
  items: string[];
  reverse?: boolean;
  speed?: number;
}) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: reverse ? "100%" : "-100%",
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      },
    });
  }, [controls, reverse, speed]);

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-8"
        animate={controls}
        style={{ willChange: "transform" }}
      >
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center text-slate-900 text-base w-[300px] flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-700 flex-shrink-0 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}


export function splitFeaturesIntoRows(features: Feature[], rows: number): Feature[][] {
    const res = Array.from({ length: rows }, () => [] as Feature[]);
    features.forEach((feature, i) => res[i % rows].push(feature));
    return res;
  }


  export const splitIntoRows = <T,>(arr: T[], rows: number): T[][] => {
    const res = Array.from({ length: rows }, () => [] as T[]);
    arr.forEach((item, i) => res[i % rows].push(item));
    return res;
};
  

export function splitEssentialsIntoRows(arr: string[], rows: number) {
  const res = Array.from({ length: rows }, () => [] as string[]);
  arr.forEach((item, i) => res[i % rows].push(item));
  return res;
}



