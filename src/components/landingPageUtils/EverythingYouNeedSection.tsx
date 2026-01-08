import { useEffect } from "react";
import { splitEssentialsIntoRows } from "./marquee";
import { essentials, } from "@/components/landingPageUtils/constants";
import { motion, useAnimation } from "framer-motion";


function EssentialsMarqueeRow({
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
            className="flex items-center text-slate-900 text-base w-[220px] lg:w-[300px] flex-shrink-0"
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
            <span className="text-xs lg:text-sm my-2 lg:my-0">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}


function EverythingYouNeedMarquee() {
  const rows = splitEssentialsIntoRows(essentials, 4);

  return (
    <div className="relative lg:space-y-4 py-6">
      <div className="absolute left-0 top-0 h-full w-2 sm:w-4 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-2 sm:w-4 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none" />

      {rows.map((items, i) => (
        <EssentialsMarqueeRow
          key={i}
          items={items}
          speed={40} 
        />
      ))}
    </div>
  );
}


const EverythingYouNeedSection = () => {
    
  return (
    <section className="bg-slate-100 py-6 lg:py-20 px-2 sm:px-6 rounded--[100px] lg:rounded--[220px]">
      <div className="mx-auto">
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl px-4 sm:px-0 font-bold text-slate-900 mb-4 font-inter leading-snug">
            Everything You Need. <br className="hidden sm:block" />
            <span className="text-orange-700">Nothing You Don’t.</span>
          </h2>
          <p className="text-slate-600 sm:text-lg max-w-2xl mx-auto mb-12 px-4 sm:px-0">
            Vimora cuts the fluff and gives you the real estate media delivery platform that works exactly how it should.
          </p>
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 py-4 lg:py-10 rounded-3xl shadow-inner border border-slate-300/50">
          <EverythingYouNeedMarquee />
        </div>
      </div>
    </section>
  );
};



export default EverythingYouNeedSection;