import CountUp from "react-countup";
import { MarqueeRow, splitIntoRows } from "./marquee";
import { testimonials } from "@/components/landingPageUtils/constants";

const testimonialRows = splitIntoRows(testimonials, 2);


const TestimonialsSection = () => {
    return (
             <section className="bg-white py-24 px-0 md:px-6">
      <div className="max-w-full mx-auto">
          <h2 className="sm:text-4xl text-2xl font-bold text-slate-900 mb-6 text-center bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
          Over <span className="text-blue-950">
          <CountUp start={449100} end={449585} duration={290} separator="," />

          </span> Images Delivered
        </h2>
          <div className="text-center mb-12">
          <h3 className="text-xl sm:text-3xl font-semibold text-slate-800 mb-2 px-6">
          The Proof Is in the Platform
          </h3>
          <p className="text-orange-800 text-md sm:text-lg px-6 italic">
            Real feedback from real professionals who rely on Vimora every day.
          </p>
        </div>

            {/* Gradient wrapper */}
            <div className="relative overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />

              {/* Right Gradient */}
              <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

              {/* Marquee rows */}
              <div className="space-y-8">
                {testimonialRows.map((row, i) => (
                  <MarqueeRow
                    key={i}
                    items={row}
                    speed={140}
                  />
                ))}
              </div>
            </div>
          </div>
      </section>
    )
};

export default TestimonialsSection;