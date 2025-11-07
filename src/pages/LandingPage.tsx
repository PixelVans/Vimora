import Navbar from "@components/Navbar";
import {  Twitter, Facebook, Youtube, Instagram,
  CheckCircle, ArrowRight, LayoutGrid,
  Rocket,
  ChevronDownIcon,User, TrendingUp, Crown, 
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
    <section className="relative pt-20 mt-20 lg:mt-20 2xl:mt-40 flex justify-center bg-gradient-to-b from-white via-blue-100/30 to-white ">
        {/* --- Background image (soft blur pattern) --- */}
        <img
          src="/media/footer.jpg"
          alt="Background pattern"
          className="absolute inset-0 w-full h-full object-cover opacity-10 blur-sm"
        />

        {/* --- Gradient overlay --- */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/70"></div>

        
        {/* --- Main Content --- */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16 2xl:gap-32 items-center max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16">
          {/* Text Content */}
          <motion.div
            className="space-y-6 lg:space-y-9"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-4xl xl:text-4xl  2xl:text-5xl  font-bold leading-tight text-slate-900 flex flex-col xl:space-y-2">
              <h1>Better than Spiro.</h1>
              <h1>Cheaper than Aryeo.</h1>
              <h1 className="text-blue-700">Easier than Both.</h1>
            </div>

              <p className="text-sm sm:text-lg text-slate-700 mx-2">
                <strong className="text-blue-950">Vimora</strong> is the all-in-one platform for real estate photographers to
                upload and deliver real estate media, and get paid easily without the dated and clunky tools or high monthly fees.
              </p>


            <div className="flex flex-col xl:flex-row gap-4">
              {/* Buttons */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden bg-primary text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-lg"
              >
                <span className="z-10 relative">Get Started <span>For Free</span></span>
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
                className="group relative bg-white/60 backdrop-blur-md ring-1 mb-5 xl:mb-0 ring-primary text-blue-700 px-6 py-2 rounded-lg font-semibold flex items-center gap-2 hover:ring-2 hover:ring-blue-500 transition-all duration-300"
              >
                <span className="z-10 relative">Compare <span>Between Competitors</span> </span>
                <LayoutGrid
                  className="text-blue-950 transform transition-transform duration-500 group-hover:rotate-y-180 "
                  size={18}
                />
              </motion.button>
            </div>
          </motion.div>

          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main banner image (static) */}
            <img
              src="/media/listings.png"
              alt="Landing visual"
              className="relative z-10 max-w-full h-auto rounded-xl shadow-xl border border-slate-200"
            />

            {/* Animated camera overlay */}
            <motion.img
              src="/media/camera.png" // replace with your actual image
              alt="Overlay visual"
              className="hidden xl:flex absolute right-[-10px] 2xl:right-[-50px] bottom-0  transform translate-x-1/4 translate-y-1/4 
                        z-20 w-1/3 max-w-[200px] rounded-lg shadow-lg"
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




        



  {/* propelling section */}

      <section className="bg-slate-100 py-20 px-4 sm:px-6 rounded-tl-none rounded-tr-[140px] mt-5 md:mt-9 md:rounded-tr-[250px] shadow-md">
      <div className="max-w-5xl 2xl:max-w-7xl  mx-auto text-center">

    {/* Heading */}
    <h2 className="text-2xl sm:text-4xl  font-bold mb-4 bg-gradient-to-r from-black to-blue-500 text-transparent bg-clip-text">
      Propelling You Forward.
    </h2>

      <p className="text-slate-700 text-sm sm:text-lg max-w-2xl mx-auto mb-10 px-2 lg:px-0">
        We took all the best aspects of every real estate media delivery platform and streamlined it,
        improving upon the user experience in every way so you don't have something holding you back,
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



{/* Steps to Deliver Section */}
<section className="relative bg-[#020617] py-28 md:px-16 overflow-hidden rounded-3xl">
  {/* Background visual texture */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.15),transparent_60%)]" />
  <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] bg-blue-500/5 blur-[200px] -translate-x-1/2 -translate-y-1/2" />

  {/* Header */}
  <div className="relative z-10 text-center mb-9 sm:mb-24">
    <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-200 text-transparent bg-clip-text">
      3 Simple Steps To Deliver A Listing
    </h3>
    <p className="text-slate-400 mt-4 text-sm sm:text-lg max-w-2xl mx-auto px-4">
      From upload to payout, experience a smooth and professional delivery process built for real estate photographers.
    </p>
  </div>

  {/* Steps */}
  <div className="relative z-10 max-w-7xl mx-auto space-y-12 md:space-y-24 px-4">
    {[
      {
        id: 1,
        title: "Upload Your Media",
        text: "Drag and drop your photos, videos, virtual tours, floor plans, and more. Branded delivery pages are automatically created and easy to use.",
        img: "/media/upload-illustration.jpg",
      },
      {
        id: 2,
        title: "Share With A Click",
        text: "Send your media directly to your client in a clean, professional link with no login required. Everything is perfectly formatted for any device.",
        img: "/media/share.png",
      },
      {
        id: 3,
        title: "Get Paid Instantly",
        text: "Vimora tracks your services and payments automatically, creating clear, itemized invoices so you can focus on your craft. Integrated with Stripe for fast and secure payouts.",
        img: "/media/pay.png",
      },
    ].map((step, index) => {
      const imageOnRight = index % 2 === 0; // Step 1 right, Step 2 left, Step 3 right
      return (
        <div
          key={step.id}
          className={`flex flex-col ${
            imageOnRight ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-10 md:gap-20 group`}
        >
          {/* Image Block */}
          <div className="md:w-1/2 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/30 to-cyan-400/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />
            <div className="overflow-hidden rounded-lg border border-white/10 shadow-[0_0_40px_-10px_rgba(56,189,248,0.3)]">
              <img
                src={step.img}
                alt={step.title}
                className="w-auto h-[220px] xl:h-auto  object-cover transform transition duration-700 "
              />
            </div>
          </div>

          {/* Text Block */}
          <div className="md:w-1/2 space-y-6 px-2">
            <div className="flex items-center gap-3">
              <span className="text-blue-400 text-lg sm:text-xl font-semibold tracking-widest">
                STEP <span className="text-yellow-100 text-lg sm:text-2xl  ">0{step.id}</span>
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent" />
            </div>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
              {step.title}
            </h4>
            <p className="text-slate-400 text-sm 2xl:text-lg leading-relaxed max-w-lg">
              {step.text}
            </p>
          </div>
        </div>
      );
    })}
  </div>

  {/* Subtle line separator */}
  <div className="mt-9 lg:mt-24 flex justify-center">
    <div className="w-44 h-[4px] bg-gradient-to-r from-blue-400 via-orange-300 to-blue-400 rounded-full opacity-70 animate-pulse" />
  </div>
</section>



        </div>
      </section>


{/* Collaboration & Communication Section */}
<section className="relative bg-white py-12 xl:py-28 md:px-16 overflow-hidden">
  {/* Subtle background accents */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,165,0,0.08),transparent_60%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.08),transparent_70%)]" />

  {/* Header */}
  <div className="relative z-10 text-center mb-20">
    <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 px-6 md:px-2">
      Seamless Collaboration, Swift Feedback, Stronger Teams
    </h3>
    <p className="text-slate-600 mt-4 text-sm sm:text-lg max-w-2xl mx-auto px-4">
      Vimora keeps collaboration effortless, helping clients and photographers stay in sync through fast communication,
      streamlined revisions, and clear team delegation tools.
    </p>
  </div>

  {/* Content Row */}
  <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center xl:justify-between xl:gap-16 px-6">

    {/* Image Cluster */}
    <div className="relative flex justify-center lg:w-1/2">
      {/* Background shape glow */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-orange-200/40 via-blue-100/30 to-transparent blur-3xl rounded-full" />

      
     {/* Mobile (stacked overlap, topmost last) */}
      <div className="relative flex flex-col items-center xl:hidden mt-[-50px] md:mt-10 mb-[-350px]">
        <img
          src="/media/chat.png"
          alt="Chat interface"
          className="object-cover rounded-2xl shadow-xl border-4 border-blue-700 w-auto max-w-[80%] relative z-10 translate-y-0"
        />
        <img
          src="/media/revision.png"
          alt="Revision preview"
          className="object-cover rounded-2xl shadow-lg border-4 border-orange-700 w-auto max-w-[90%]  relative z-20 -translate-y-[65%]"
        />
        <img
          src="/media/teams.png"
          alt="Team management"
          className="object-cover rounded-2xl shadow-lg border-4 border-slate-600 w-auto max-w-[80%] relative z-30 -translate-y-[150%]"
        />
      </div>




      {/* Desktop (overlapping) view */}
      <div className="hidden xl:flex relative mt-[-80px] mr-10 ">
        <img
          src="/media/chat.png"
          alt="Chat interface"
          className="object-cover rounded-2xl shadow-xl border-4 border-blue-700 transform rotate-[-3deg] translate-x-2"
        />
        <img
          src="/media/revision.png"
          alt="Revision preview"
          className="object-cover rounded-2xl shadow-lg border-4 border-orange-700 absolute left-20 top-16 transform rotate-[6deg]"
        />
        <img
          src="/media/teams.png"
          alt="Team management"
          className="object-cover rounded-2xl shadow-lg border-4 border-slate-600 absolute left-40 top-32 transform rotate-[-4deg]"
        />
      </div>
    </div>

    {/* Text Description */}
    <div className="xl:w-1/2 space-y-9 ">
      {[
        {
          id: 1,
          title: "Revisions",
          text: "Clients can request edits directly in the project, so you never lose track of feedback. Every version stays organized and visible.",
          color: "from-blue-600 to-blue-400",
        },
        {
          id: 2,
          title: "Communication",
          text: "Stay connected with built-in chat and notifications. Discuss project details without leaving the Vimora workspace.",
          color: "from-orange-700 to-orange-700",
        },
        {
          id: 3,
          title: "Teams & Delegation",
          text: "Assign roles, manage assistants, or invite editors. Vimora makes teamwork fluid and transparent for every project.",
          color: "from-slate-900 to-slate-900",
        },
      ].map((feature) => (
        <div key={feature.id} className="flex flex-col gap-2">
          <div className={`text-transparent bg-clip-text bg-gradient-to-r ${feature.color} font-semibold text-lg`}>
            {feature.title}
          </div>
          <p className="text-slate-500 leading-relaxed max-w-md">{feature.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>




      
      

      {/* testimonials */}
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
                    speed={70}
                  />
                ))}
              </div>
            </div>
          </div>
      </section>
      


 {/* key feature of vimora */}
<section className="bg-slate-50 py-20  shadow">
    <div className="md:px-6 mx-auto text-center">
  <div className="text-center mb-5">
    <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-inter mb-3">
      What Powers Vimora
    </h2>
    <div className="w-24 h-[6px] mx-auto bg-gradient-to-r from-blue-500 via-orange-400 to-blue-500 rounded-full blur-[0.5px]" />
  </div>
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
    <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-4 font-inter">
      Find the Right Plan for You
    </h2>
    <p className="text-slate-600 text-sm sm:text-lg mb-5 sm:mb-16">
      Transparent pricing. No surprises. Just pure value.
    </p>

    <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4">Premium Subscriptions</h3>

    {/* Billing toggle */}
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
        <div className="bg-blue-100 text-blue-800 p-3 mb-4 rounded-full shadow-md shadow-slate-500 mx-auto">
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
        <div className="bg-blue-100 text-blue-800 p-3 mb-4 rounded-full shadow-md shadow-slate-500 mx-auto">
          <User className="w-5 h-5" />
        </div>
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
      <div className="relative bg-gradient-to-tr from-yellow-500 to-yellow-950 text-white transition-all duration-300 
        delay-100 ease-out hover:scale-[1.02] active:scale-[1.01] rounded-2xl p-8 shadow-xl flex flex-col z-10">
        <div className="bg-white/20 p-3 mb-4 rounded-full shadow-md shadow-slate-800 mx-auto">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
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
        <div className="bg-blue-100 text-blue-800 p-3 mb-4 rounded-full shadow-md shadow-slate-500 mx-auto">
          <Crown className="w-5 h-5" />
        </div>
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
    <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-4 font-inter">
      Who Vimora is For
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
  <section className="bg-slate-100  py-20 px-6 rounded--[100px] lg:rounded--[220px]">
  <div className=" mx-auto">
    {/* Heading */}
    <div className="text-center">
      <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-4 font-inter leading-snug">
        Everything You Need. <br className="hidden sm:block" />
        <span className="text-orange-700">Nothing You Don’t.</span>
      </h2>
      <p className="text-slate-600 sm:text-lg max-w-2xl mx-auto mb-12">
        Vimora cuts the fluff and gives you the real estate media delivery platform that works exactly how it should.
      </p>
    </div>

    {/* Feature List - Left aligned */}
  <div className="mt-16 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 py-10 rounded-3xl shadow-inner border border-slate-300/50">
  <EverythingYouNeedMarquee />
</div>

</div>
</section>



      
{/* CTA */}
<section className="px-4 sm:px-6 pb-5 mt-9">
  <div className="max-w-7xl mx-auto bg-gradient-to-b from-white via-blue-50 to-blue-100 rounded-3xl shadow-md shadow-slate-300 overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

      {/* Left - Image */}
      <div className=" h-full">
        <img
          src="/media/footer.jpg" 
          alt="Free Trial"
          className="w-[500px] h-full object-cover"
        />
      </div>
      

      {/* Right - Text & Form */}
      <div className="p-8 sm:p-12 text-center  md:text-left">
        <h2 className="text-xl sm:text-3xl font-bold text-slate-900 text-center ">
          Get Your First 5 deliveries On Us
        </h2>
        <p className="mb-8 mt-3 text-slate-800 text-center">
          No contracts. No hidden fees. Cancel anytime.
        </p>

        <form className="justify-between mx-auto md:mx-0 flex flex-col  items-center gap-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-[300px] px-4 py-2 rounded-md bg-white text-slate-800 placeholder-slate-500 border border-slate-400 ring-1 ring-orange-700 focus:ring-2 focus:ring-slate-400 focus:outline-none"
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
