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
              className="bg-blue-50 rounded-xl shadow-md max-w-[250px] sm:max-w-[300px] flex-shrink-0 px-2 
              sm:px-3 text-center flex flex-col items-center my-1 py-4 "
            >
              <Icon className="w-7 h-7 sm:w-9 sm:h-9 text-orange-700 mb-3" />
              <h3 className="font-semibold text-[12px] sm:text-sm text-blue-700">{feature.title}</h3>
              <p className="text-[10px] sm:text-sm text-slate-600">{feature.description}</p>
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
        {[...items, ...items, ...items].map((t, i) => (

          <div
          key={i}
          className="bg-white rounded-xl shadow-md max-w-[220px] sm:max-w-[320px] flex-shrink-0 p-3 sm:p-4 my-2"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-full object-cover border border-slate-900"
              />
              <div>
                <p className="font-semibold text-xs sm:text-base text-slate-800">{t.name}</p>
                <p className="text-[10px] sm:text-xs text-blue-900">{t.title}</p>
              </div>
            </div>
            <p className="text-slate-600 text-[9px] sm:text-sm italic">&ldquo;{t.quote}&rdquo;</p>
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



