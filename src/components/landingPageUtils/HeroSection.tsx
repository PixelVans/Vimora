
import { ArrowRight,  } from "lucide-react";
import { motion, } from "framer-motion";
import { Link,  } from "react-router-dom";


const HeroSection = () => {
  return (
    <section className="relative pt-20 mt-20 lg:mt-20 2xl:mt-40 mb-5 2xl:mb-15 flex justify-center bg-gradient-to-b from-white via-blue-100/30 to-white ">
        
        <img
          src="/media/footer.jpg"
          alt="Background pattern"
          className="absolute inset-0 w-full h-full object-cover opacity-10 blur-sm"
        />

      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/70"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-16  
        
        lg:mb-9 2xl:mb-12 items-center max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-10 2xl:px-16">
          {/* Text Content */}
          <motion.div
            className="space-y-4 lg:space-y-9"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            
              <h1 className="font-bold leading-[1.05] xl:leading-[1.1] text-slate-900 text-4xl xl:text-4xl 2xl:text-[57px]">
                Better workflows.{" "}
                <span className="text-blue-600">Lower fees.</span>
              </h1>

              <p className=" text-slate-700 font-semibold text-lg xl:text-xl 2xl:text-2xl">
                A better way to deliver real estate media.
              </p>




              <p className="text-sm sm:text-lg text-slate-700 mx-2">
                <strong className="text-blue-950">Vimora</strong> is the only platform you’ll ever need to deliver listings, manage revisions,
                 and get paid on time, every time - without the clutter or high fees
              </p>


            <div className="flex flex-col xl:flex-row gap-4 items-start  mt-4 ">
              {/* Buttons */}
              <motion.button
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.07 }}
                  className="group relative overflow-hidden bg-primary text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-lg shadow-blue-500/40"
                >
                  {/* Content */}
                  <span className="z-10 relative">
                    Get Started <span>For Free</span>
                  </span>

                  <ArrowRight
                    className="z-10 relative transition-transform group-hover:translate-x-2 duration-300"
                    size={18}
                  />

                  
                  <span className="absolute inset-0 pointer-events-none">
                    <span
                      className="absolute -inset-x-full top-0 h-full w-2/3
                      bg-gradient-to-r from-transparent via-white/60 to-transparent
                      animate-shimmer-fast"
                    />
                  </span>

                  
                  <span className="absolute inset-0 rounded-lg ring-2 ring-blue-400/40 animate-pulse-glow" />
                </motion.button>



              <Link to="/comparison">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  className="group relative bg-white/60 backdrop-blur-md ring-2 xl:mb-0 ring-blue-700 text-blue-700 px-6 py-2 rounded-lg font-semibold flex items-center gap-2 hover:ring-2 hover:ring-blue-500 transition-all duration-300"
                >
                  <span className="z-10 relative">
                    Compare <span>Between Competitors</span>
                  </span>
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-end ">
            
            <img
              src="/media/listings.png"
              alt="Landing visual"
              className="relative z-10 max-w-full h-auto rounded-xl shadow-xl border border-slate-200"
            />

            {/* Animated camera overlay */}
            <motion.img
              src="/media/Photographer-stats.png" 
              alt="Overlay visual"
              className="hidden xl:flex absolute right-[-0px] 2xl:right-[-40px] bottom-[-20px] border  transform translate-x-1/4 translate-y-1/4 
                        z-20 w-[500px] max-w-[1400px] h-auto rounded-lg  shadow-md"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
            />
          </div>


        </div>
      </section>
  );
}


export default HeroSection;
