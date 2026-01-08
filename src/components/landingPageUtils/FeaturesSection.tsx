import { FeatureMarqueeRow, splitIntoRows } from "./marquee";
import { features,  } from "@/components/landingPageUtils/constants";



const featureRows = splitIntoRows(features, 2);


const FeaturesSection = () => {
    return (
         
            <section className="bg-blue-950 py-20 xl:py-32 hidden shadow">
                <div className="md:px-6 mx-auto text-center">
              <div className="text-center mb-10 xl:mb-14">
                <h2 className="text-2xl sm:text-4xl font-bold text-white font-inter mb-3">
                  What Powers Vimora
                </h2>
                <div className="w-24 h-[6px] mx-auto bg-gradient-to-r from-blue-500 via-orange-400 to-blue-500 rounded-full blur-[0.5px]" />
              </div>
            {/* Gradient wrapper */}
                <div className="relative overflow-hidden">
                  
            {/* Marquee rows */}
                  <div className="space-y-8">
                  {featureRows.map((row, i) => (
                    <FeatureMarqueeRow
                      key={i}
                      items={row}
                      speed={50}
                    />
                  ))}
                </div>
                </div>
              </div>
            </section>
          )
      };

export default FeaturesSection;