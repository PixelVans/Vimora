import Navbar from "@components/Navbar";
import { DollarSignIcon, Share2Icon, UploadIcon,  Twitter, Facebook, Youtube, Instagram,
  CheckCircle, ArrowRight, LayoutGrid,
  Rocket,
  ChevronDownIcon, 
} from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect,  useState,  } from "react";
import CountUp from 'react-countup';
import { FeatureMarqueeRow, MarqueeRow, splitIntoRows,   } from "@/components/ui/landing/marquee";
import { features, essentials, testimonials } from "@/components/ui/landing/constants";
import { useLocation } from "react-router-dom";



const testimonialRows = splitIntoRows(testimonials, 2);
const featureRows = splitIntoRows(features, 2);


// Helper to split essentials into N rows
const splitEssentialsIntoRows = (arr: string[], rows: number) => {
  const res = Array.from({ length: rows }, () => [] as string[]);
  arr.forEach((item, i) => res[i % rows].push(item));
  return res;
};

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

function EverythingYouNeedMarquee() {
  const rows = splitEssentialsIntoRows(essentials, 4);

  return (
    <div className="relative space-y-4 py-6">
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


export default function LandingPage() {

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Wait for DOM to render before scrolling
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); 
    }
  }, [location]);

  const [yearly, setYearly] = useState(false);

const toggleBilling = () => setYearly(!yearly);

const pricing = {
  solo: yearly ? 400 : 40,
  growth: yearly ? 700 : 70,
  pro: yearly ? 1200 : 120,
};

  
  
  return (
    <>
      <Navbar />

      {/* hero section */}
    <section className="relative pt-20 mt-8 lg:mt-5 lg:min-h-[100dvh] flex justify-center bg-gradient-to-b from-white via-blue-100/30 to-white overflow-hidden">
        {/* --- Background image (soft blur pattern) --- */}
        <img
          src="/media/footer.jpg"
          alt="Background pattern"
          className="absolute inset-0 w-full h-full object-cover opacity-10 blur-sm"
        />

        {/* --- Gradient overlay --- */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/70"></div>

        {/* Right Half (zero-index background) --- */}
      <div className="hidden absolute inset-y-0 right-12 w-1/2 lg:flex items-center justify-end overflow-hidden z-0 mt-16">
        <div
          className="text-[40vw] font-black text-slate-100 leading-none select-none pointer-events-none"
          style={{
            textShadow: `
              2px 2px 0 #cbd5e1,
              -2px -2px 0 #cbd5e1,
              2px -2px 0 #cbd5e1,
              -2px 2px 0 #cbd5e1
            `,
          }}
        >
          V
        </div>
      </div>


        {/* --- Main Content --- */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16 items-center max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16">
          {/* Text Content */}
          <motion.div
            className="space-y-6 lg:space-y-9"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-4xl xl:text-5xl  2xl:text-6xl font-bold leading-tight text-slate-900 flex flex-col sm:space-y-2">
              <h1>Better than Spiro.</h1>
              <h1>Cheaper than Aryeo.</h1>
              <h1 className="text-blue-700">Easier than Both.</h1>
            </div>

            <p className="text-sm sm:text-lg text-slate-700 mx-2">
              <strong className="text-blue-950">Vimora</strong> is the all-in-one platform for real estate photographers to
              upload & deliver real estate media, and get paid — all without the dated and clunky tools or high monthly fees.
            </p>

            <div className="flex flex-col xl:flex-row gap-4">
              {/* Buttons */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden bg-primary text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-lg"
              >
                <span className="z-10 relative">Get Started For Free</span>
                <ArrowRight
                  className="z-10 relative transition-transform group-hover:translate-x-2 duration-300"
                  size={18}
                />
                <span
                  className="absolute inset-0 bg-gradient-to-r from-black to-blue-300 opacity-0 
                  group-hover:opacity-30 transition-opacity duration-300 rounded-lg"
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                className="group relative bg-white/60 backdrop-blur-md ring-1 ring-primary text-blue-700 px-6 py-2 rounded-lg font-semibold flex items-center gap-2 hover:ring-2 hover:ring-blue-500 transition-all duration-300"
              >
                <span className="z-10 relative">Compare Between Competitors</span>
                <LayoutGrid
                  className="text-blue-950 transform transition-transform duration-500 group-hover:rotate-y-180"
                  size={18}
                />
              </motion.button>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
          >
            <img
              src="/banner.jpeg"
              alt="Landing visual"
              className="relative z-10 max-w-full h-auto rounded-xl shadow-xl border border-slate-200 border-5"
            />
          </motion.div>
        </div>
      </section>




        

     <section className="relative py-16 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,102,255,0.05),_transparent_70%)]"></div>

  <div className="max-w-6xl mx-auto px-6 text-center relative">
    {/* Heading */}
    <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-3">
      Trusted by leading brands
    </p>
    <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-10">
      Professionals and media teams worldwide rely on Vimora
    </h2>

    {/* Logos */}
    <div className="flex flex-wrap justify-center items-center gap-2 md:gap-16">
      {[
        "/media/logos/remax.png",
        "/media/logos/keller.png",
        "/media/logos/zillow.jpg",
        "/media/logos/compass.png",
      ].map((logo, idx) => (
        <div
          key={idx}
          className="group bg-white/70 backdrop-blur-sm border border-slate-200 shadow-sm hover:shadow-md rounded-2xl p-4 transition-all duration-300 hover:scale-105"
        >
          <img
            src={logo}
            alt="brand logo"
            className="h-7 sm:h-10 w-auto  group-hover:grayscale-0 transition duration-300"
          />
        </div>
      ))}
    </div>
  </div>
</section>


  {/* propelling section */}

      <section className="bg-slate-100 py-20 px-4 sm:px-6 rounded-tl-none rounded-tr-[140px] mt-5 md:mt-9 md:rounded-tr-[250px] shadow-md">
      <div className="max-w-7xl mx-auto text-center">

    {/* Heading */}
    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-black to-blue-500 text-transparent bg-clip-text">
      Propelling You Forward.
    </h2>

    <p className="text-slate-700 text-lg max-w-2xl mx-auto mb-10">
      We took all the best aspects of every real estate media delivery platform and streamlined it,
      improving upon the user experience in every way so you don't have something holding you back —
      you have something propelling you forward.
    </p>

    {/* Image */}
    <motion.div
        className="overflow-hidden mx-auto rounded-2xl max-w-5xl shadow-md mb-12"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}>
        <img
          src="/media/propel.jpg"
          alt="Propelling Illustration"
          className="w-full h-60 mx-auto sm:h-80 md:h-96 lg:h-[450px] object-cover"
        />
      </motion.div>


    {/* Down Arrow */}
    <ChevronDownIcon className="h-9 w-9 text-blue-600 mx-auto mb-6 animate-bounce" />

    {/* Subheading */}
    <div className="bg-blue-0 md:p-6 md:pb-12 rounded-3xl md:shadow-md">
      <h3 className="text-3xl md:text-4xl font-semibold my-6 mb-9 text-slate-800">3 Steps To Deliver A Listing</h3>

      {/* Steps Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          step: "1",
          title: "Upload your media",
          Icon: UploadIcon,
          desc: "Drag and drop your photos, videos, virtual tours, floor plans, aerial photos, and more. Branded delivery pages are auto-generated and easy to use.",
        },
        {
          step: "2",
          title: "Share with a click",
          Icon: Share2Icon,
          desc: "Send your media right to your client in a clean, professional link straight to their phone and email — with no login required.",
        },
        {
          step: "3",
          title: "Get paid instantly",
          Icon: DollarSignIcon,
          desc: "VIMORA automatically tracks orders, services provided, and payments, and sends a clean, line-itemed invoice — so you don't have to.",
        },
      ].map(({ step, title, Icon, desc }) => (
        <div
          key={step}
          className="group relative bg-white border border-slate-200 rounded-xl sm:rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center hover:-translate-y-1"
        > <div className="group">
        <div className="text-5xl sm:text-6xl mb-5 font-extrabold text-slate-300 select-none z-0
          group-hover:text-slate-500 transition-colors duration-300 delay-200">
        {step}
      </div>

      </div>
      
    <div className="z-10 flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-1">
            <Icon className="h-10 w-10 text-blue-700 mb-4 transform transition-transform duration-300 group-hover:scale-110" />
            <h4 className="text-xl font-semibold text-slate-950 mb-2 text-center">
              {title}
            </h4>
            <p className="text-slate-600 text-sm text-center">{desc}</p>
          </div>
        </div>
      ))}
    </div>
</div>



        </div>
      </section>




      
      

      {/* testimonials */}
      <section className="bg-white py-24 px-0 md:px-6">
      <div className="max-w-full mx-auto">
          <h2 className="sm:text-4xl text-3xl font-bold text-slate-900 mb-6 text-center bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
          Over <span className="text-blue-900">
          <CountUp start={649700} end={650000} duration={190} separator="," />

          </span> Images Delivered
        </h2>
          <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-2 px-6">
          The Proof Is in the Platform
          </h3>
          <p className="text-slate-600 text-lg px-6">
            Real feedback from real professionals who rely on VIMORA every day.
          </p>
        </div>

            {/* Gradient wrapper */}
            <div className="relative overflow-hidden">
              {/* Left Gradient */}
              <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />

              {/* Right Gradient */}
              <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

              {/* Marquee rows */}
              <div className="space-y-8">
                {testimonialRows.map((row, i) => (
                  <MarqueeRow
                    key={i}
                    items={row}
                    speed={40}
                  />
                ))}
              </div>
            </div>
          </div>
      </section>
      


      {/* key feature of vimora */}
      <section className="bg-slate-50 py-20  shadow">
    <div className="md:px-6 mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 font-inter">
      Key VIMORA Features
    </h2>

    {/* Gradient wrapper */}
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-4 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-4 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

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
   


  
 {/* pricing section */}
 <section
  className="scroll-mt-20 container rounded-3xl py-20 px-6 shadow bg-gradient-to-b from-blue-50 to-blue-200 mt-9"
  id="pricing"
>
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-inter">
      Find the Right Plan for You
    </h2>
    <p className="text-slate-600 text-lg mb-16">
      Transparent pricing. No surprises. Just pure value.
    </p>

    <h3 className="text-2xl font-semibold text-slate-800 mb-4">Premium Subscriptions</h3>
    <div className="mb-12 flex items-center justify-center gap-3">
      <span className={`font-bold ${!yearly ? "text-blue-600" : "text-slate-600"}`}>Monthly</span>
      <button
        onClick={toggleBilling}
        className="relative inline-flex h-6 w-12 items-center rounded-full bg-blue-500 transition"
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-300 ease-in-out ${
            yearly ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
      <span className={`font-bold ${yearly ? "text-blue-600" : "text-slate-600"}`}>
        Yearly <span className="text-green-600 font-semibold">(Get 2 Months Free)</span>
      </span>
    </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">

       {/* Pay As You Go */}
       <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 ease-in-out flex flex-col relative overflow-hidden">
        <div className=" bg-blue-100 text-blue-800 p-3 mb-4 rounded-full shadow-md shadow-slate-500 mx-auto">
          <Rocket className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-semibold text-slate-800 mb-2">Pay As You Go</h3>
        <div className="text-4xl font-bold text-blue-800 mb-1">$3</div>
        <p className="text-sm text-slate-600 mb-6 font-semibold">per delivery</p>
        <ul className="text-sm text-slate-800 space-y-2 flex-1 text-left">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-800 mt-0.5" /> No Monthly Subscription
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-800 mt-0.5" /> No Hidden Costs
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-800 mt-0.5" /> Predictable Expense
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-800 mt-0.5" /> Standard Support
          </li>
        </ul>
        <button className="mt-6 bg-blue-500 text-white rounded-md py-2 px-4 font-medium hover:bg-blue-700 hover:-translate-y-1 transition-transform duration-300 ease-in-out">
          Get Started
        </button>

      </div> 


      {/* Solo */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 ease-in-out flex flex-col">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">Solo</h3>
        <div className="text-4xl font-bold text-blue-800 mb-1">${pricing.solo}</div>
        <p className="text-sm text-slate-600 mb-6 font-semibold">{yearly ? "per year" : "per month"}</p>
        <ul className="text-sm text-slate-800 space-y-2 flex-1 text-left">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-800 mt-0.5" />
            {yearly ? "180 Annual Deliveries" : "15 Monthly Deliveries"}
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-800 mt-0.5" /> Property Sites Included
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-800 mt-0.5" /> Unused Listings Roll Over
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-800 mt-0.5" /> Standard Support
          </li>
        </ul>
        <button className="mt-6 bg-blue-500 text-white rounded-md py-2 px-4 font-medium hover:bg-blue-700 hover:-translate-y-1 transition-transform duration-300 ease-in-out">
          Get Started
        </button>
      </div>

      {/* Growth */}
            <div className="relative bg-gradient-to-tr from-blue-500 to-indigo-950 text-white transition-all duration-300 
      delay-100 ease-out hover:scale-[1.02] active:scale-[1.01] rounded-2xl p-8  shadow-xl flex flex-col z-10">
        <div className="absolute top-0 right-0 bg-white text-blue-800 text-xs font-bold px-4 py-1 rounded-br-xl rounded-tl-xl">
          Most Popular
        </div>
        <h3 className="text-lg font-semibold mb-2">Growth</h3>
        <div className="text-4xl font-bold mb-1">${pricing.growth}</div>
        <p className="text-sm mb-6">{yearly ? "per year" : "per month"}</p>
        <ul className="text-sm space-y-2 flex-1 text-left">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-white mt-0.5" />
            {yearly ? "480 Annual Deliveries" : "40 Monthly Deliveries"}
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-white mt-0.5" /> Property Sites Included
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-white mt-0.5" /> Roll Over Listings
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-white mt-0.5" /> Standard Support
          </li>
        </ul>
        <button className="mt-6 bg-white text-blue-600 rounded-md py-2 px-4 font-medium hover:bg-slate-100 hover:-translate-y-1 transition-transform duration-300 ease-in-out">
        Get Started
      </button>

      </div>

      {/* Pro */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 ease-in-out flex flex-col">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">Pro</h3>
        <div className="text-4xl font-bold text-blue-800 mb-1">${pricing.pro}</div>
        <p className="text-sm text-slate-600 mb-6 font-semibold">{yearly ? "per year" : "per month"}</p>
        <ul className="text-sm text-slate-800 space-y-2 flex-1 text-left">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-800 mt-0.5" />
            {yearly ? "1200 Annual Deliveries" : "100 Monthly Deliveries"}
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-800 mt-0.5" /> Property Sites Included
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-800 mt-0.5" /> Unused Listings Roll Over
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-800 mt-0.5" /> Dedicated Support
          </li>
        </ul>
        <button className="mt-6 bg-blue-500 text-white rounded-md py-2 px-4 font-medium hover:bg-blue-700 hover:-translate-y-1 transition-transform duration-300 ease-in-out">
          Get Started
        </button>
      </div>

    </div>
  </div>
</section>







  {/* Who is vilmora for section */}
  <section className="bg-white py-20 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-inter">
      Who VIMORA is For
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">

      {/* Real Estate Photographers */}
      <div className="group border border-slate-200 rounded-xl overflow-hidden shadow transition hover:shadow-xl">
        <div className="overflow-hidden">
          <img
            src="/media/photographer.png"
            alt="Photographer Illustration"
            className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6 bg-white">
          <h3 className="text-xl font-semibold text-slate-950 mb-2">Real Estate Photographers</h3>
          <ul className="text-slate-600 text-sm space-y-2">
            <li>Deliver polished media fast without chasing payments.</li>
            <li>Impress agents with professional, branded listings.</li>
            <li>Spend less time managing files, more time shooting.</li>
          </ul>
        </div>
      </div>

      {/* Media Teams */}
      <div className="group border border-slate-200 rounded-xl overflow-hidden shadow transition hover:shadow-xl">
        <div className="overflow-hidden">
          <img
            src="/media/media-teams.png"
            alt="Team Illustration"
            className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6 bg-white">
          <h3 className="text-xl font-semibold text-slate-950 mb-2">Media Teams</h3>
          <ul className="text-slate-600 text-sm space-y-2">
            <li>Easily manage multiple shooters and deliveries in one place.</li>
            <li>Keep your workflow tight with built-in invoicing and media handoff.</li>
            <li>Scale your business without scaling your headaches.</li>
          </ul>
        </div>
      </div>

      {/* Brokerages */}
      <div className="group border border-slate-200 rounded-xl overflow-hidden shadow transition hover:shadow-xl">
        <div className="overflow-hidden">
          <img
            src="/media/brokerages.png"
            alt="Brokerage Illustration"
            className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6 bg-white">
          <h3 className="text-xl font-semibold text-slate-950 mb-2">Brokerages</h3>
          <ul className="text-slate-600 text-sm space-y-2">
            <li>Centralize your team’s media under one sleek dashboard.</li>
            <li>Track, schedule, and distribute content effortlessly across agents.</li>
            <li>Keep branding consistent and get listings to market faster.</li>
          </ul>
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="mt-12">
      <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg 
        hover:bg-blue-700 hover:-translate-y-1 transition-transform duration-300 ease-in-out">
        Get Started For Free
      </button>
    </div>
  </div>
</section>




  {/* Everything You need */}
  <section className="bg-gradient-to-b from-blue-50 via-blue-50 to-white  py-20 px-6 rounded-t-[100px] lg:rounded-t-[220px]">
  <div className=" mx-auto">
    {/* Heading */}
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-inter leading-snug">
        Everything You Need. <br className="hidden sm:block" />
        <span className="text-blue-900">Nothing You Don’t.</span>
      </h2>
      <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-12">
        VIMORA cuts the fluff and gives you the real estate media delivery platform that works exactly how it should.
      </p>
    </div>

    {/* Feature List - Left aligned */}
    <div className=" mt-12">
  <EverythingYouNeedMarquee />
</div>
</div>
</section>



      
{/* CTA */}
<section className="px-4 sm:px-6 pb-5">
  <div className="max-w-7xl mx-auto bg-gradient-to-b from-white via-blue-50 to-blue-100 rounded-3xl shadow-md shadow-slate-300 overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

      {/* Left - Image */}
      <div className=" h-full">
        <img
          src="/media/footer.png" 
          alt="Free Trial"
          className="w-[500px] h-full object-cover"
        />
      </div>
      

      {/* Right - Text & Form */}
      <div className="p-8 sm:p-12 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Start Your 14 Day Free Trial
        </h2>
        <p className="mb-8 mt-3 text-slate-800 text-center">
          No contracts. No hidden fees. Cancel anytime.
        </p>

        <form className="justify-between mx-auto md:mx-0 flex flex-col  items-center gap-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-[300px] px-4 py-2 rounded-md bg-white text-slate-800 placeholder-slate-500 border border-slate-400 ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-400 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition w-[300px] "
          >
            Get Started For Free
          </button>
        </form>
      </div>

    </div>
  </div>
</section>






   {/* footer section */}
<footer className="bg-white text-slate-800 pt-16 pb-8 px-6 mt-9">
  <div className="max-w-7xl mx-auto space-y-16">
    
   

    {/* Middle - Links */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 text-sm">
      {/* Column 1 */}
      <div>
        <h4 className="text-slate-900 font-semibold mb-3">Tutorials</h4>
        <ul className="space-y-2 text-slate-600">
          <li><a href="#" className="hover:underline">Resources</a></li>
          <li><a href="#" className="hover:underline">Guides</a></li>
          <li><a href="#" className="hover:underline">Examples</a></li>
          <li><a href="#" className="hover:underline">Docs</a></li>
        </ul>
      </div>
      {/* Column 2 */}
      <div>
        <h4 className="text-slate-900 font-semibold mb-3">About</h4>
        <ul className="space-y-2 text-slate-600">
          <li><a href="#" className="hover:underline">Case Studies</a></li>
          <li><a href="#" className="hover:underline">Community</a></li>
          <li><a href="#" className="hover:underline">Blog</a></li>
          <li><a href="#" className="hover:underline">Careers</a></li>
          <li><a href="#" className="hover:underline">Feature Roadmap</a></li>
        </ul>
      </div>
      {/* Column 3 */}
      <div>
        <h4 className="text-slate-900 font-semibold mb-3">Support</h4>
        <ul className="space-y-2 text-slate-600">
          <li><a href="#" className="hover:underline">Tutorial Center</a></li>
          <li><a href="#" className="hover:underline">Affiliate Program</a></li>
          <li><a href="#" className="hover:underline">Knowledge Base</a></li>
          <li><a href="#" className="hover:underline">Customer Support</a></li>
          <li><a href="#" className="hover:underline">White Glove Onboarding</a></li>
        </ul>
      </div>
      {/* Column 4 - Socials */}
      <div>
        <h4 className="text-slate-900 font-semibold mb-3">Join the Community</h4>
        <div className="flex gap-4 mt-2 text-slate-600">
          <a href="#" className="hover:text-slate-900"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="hover:text-slate-900"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="hover:text-slate-900"><Youtube className="w-5 h-5" /></a>
          <a href="#" className="hover:text-slate-900"><Instagram className="w-5 h-5" /></a>
        </div>
      </div>
    </div>

    {/* Bottom - Copyright */}
    <div className="border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} All rights reserved
    </div>

  </div>
</footer>


    </>
  );
}
