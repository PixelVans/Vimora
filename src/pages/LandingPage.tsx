import Navbar from "@components/Navbar";
import { DollarSignIcon, Share2Icon, UploadIcon, Camera, Users, Building2, Twitter, Facebook, Youtube, Instagram,
  CheckCircle, ArrowRight, LayoutGrid,
  Rocket, 
} from "lucide-react";

import { motion, useAnimation } from "framer-motion";
import { useEffect,  useState,  } from "react";
import CountUp from 'react-countup';
import { FeatureMarqueeRow, MarqueeRow, splitIntoRows,   } from "@/components/ui/landing/marquee";
import { features, essentials, testimonials } from "@/components/ui/landing/constants";



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
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none" />

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

      {/* landing section */}
      <section className="pt-20 min-h-[100dvh] flex justify-center bg-gradient-to-b from-white via-blue-100 to-white">
      <div className="grid grid-cols-1 lg:grid-cols-2  md:gap-10 items-center container">
        
        {/* Text Content */}
        <motion.div
          className="space-y-6 lg:space-y-9"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-3xl md:text-4xl lg:text-5xl mt-5 font-bold leading-tight font-inter text-slate-800 flex flex-col sm:space-y-2">
            <h1>Better than Spiro.</h1>
            <h1>Cheaper than Aryeo.</h1>
            <h1 className="text-primary">Easier than Both.</h1>
          </div>

          <p className="text-sm sm:text-lg text-slate-700 mx-2">
            <strong className="text-blue-950">Vimora</strong> is the all-in-one platform for real estate photographers to upload & deliver real estate media,
            and get paid: All without the dated and clunky tools or high monthly fees.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Animated Get Started Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-primary text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-lg"
            >
              <span className="z-10 relative">Get Started For Free</span>
              <ArrowRight
                className="z-10 relative  transition-transform group-hover:translate-x-2 group-hover:-translate-y-[px] duration-300"
                size={18}
              />
              {/* Overlay effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg" />
            </motion.button>

            {/* Compare Button with Icon Slide-in */}
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
          className="flex justify-center lg:justify-end "
          animate={{ scale: [1, 1.03, 1] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
        >
          <img
            src="/Banner.png"
            alt="Landing visual"
            className="max-w-full h-auto rounded-xl "
          />
        </motion.div>
      </div>
    </section>


      
      {/* propelling section */}

    <section className="bg-slate-100 py-20 px-6 rounded-tl-none rounded-tr-[140px] mt-5 md:mt-9 md:rounded-tr-[250px]  shadow-md">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-black to-blue-400 text-transparent bg-clip-text">
        Propelling You Forward.
       </h2>

        <p className="text-slate-700 text-lg max-w-2xl mx-auto mb-12  ">
          We took all the best aspects of every real estate media delivery platform and streamlined it,
          improving upon the user experience in every way so you don't have something holding you back -
          you have something propelling you forward.
        </p>

        {/* Subheading */}
          <h3 className="relative inline-block px-6 md:px-9 py-4  text-2xl sm:text-3xl font-semibold text-slate-950 mb-10 rounded-2xl backdrop-blur-md shadow-xl 
          before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.3)_0%,_transparent_80%)]">
          3 Steps To Deliver A Listing
        </h3>



        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white border border-slate-200 rounded-xl sm:rounded-3xl p-6 shadow-md hover:shadow-xl transition flex flex-col items-center">
            <UploadIcon className="h-10 w-10 text-blue-700 mb-4" />
            <h4 className="text-xl font-semibold text-slate-900 mb-2 text-center">Upload your media</h4>
            <p className="text-slate-700 text-sm text-center">
              Drag and drop your photos, videos, virtual tours, floor plans, aerial photos, and more.
              Branded delivery pages are auto-generated and easy to use.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-slate-200 rounded-xl sm:rounded-3xl p-6 shadow-md hover:shadow-xl transition flex flex-col items-center">
            <Share2Icon className="h-10 w-10 text-blue-700 mb-4" />
            <h4 className="text-xl font-semibold text-slate-900 mb-2 text-center">Share with a click</h4>
            <p className="text-slate-600 text-sm text-center">
              Send your media right to your client in a clean, professional link straight to their phone and email —
              with no login required.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-slate-200 rounded-xl sm:rounded-3xl p-6 shadow-md hover:shadow-xl transition flex flex-col items-center">
            <DollarSignIcon className="h-10 w-10 text-blue-700 mb-4" />
            <h4 className="text-xl font-semibold text-slate-900 mb-2 text-center">Get paid instantly</h4>
            <p className="text-slate-600 text-sm text-center">
              VIMORA automatically tracks orders, services provided, and payments, and sends a clean,
              line-itemed invoice — so you don't have to.
            </p>
          </div>
        </div>
      </div>
      </section>
      
      

      {/* testimonials */}
      <section className="bg-white py-24 px-0 md:px-9">
      <div className="max-w-full mx-auto">
          <h2 className="sm:text-4xl text-3xl font-bold text-slate-900 mb-6 text-center bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
          Over <span className="text-blue-900">
          <CountUp start={649760} end={650000} duration={150} separator="," />

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
      <section className="bg-slate-50 py-20 px-6 shadow">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 font-inter">
      Key VIMORA Features
    </h2>

    {/* Gradient wrapper */}
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

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
  <section className="scroll-mt-20 container rounded-3xl py-20 px-6 shadow bg-gradient-to-b from-blue-50 to-blue-200 mt-9" id="pricing">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-inter">
      Find the Right Plan for You
    </h2>
    <p className="text-slate-600 text-lg mb-16">
      Transparent pricing. No surprises. Just pure value.
    </p>

    {/* Pay As You Go Card (solo) */}
    <div className="grid grid-cols-1 max-w-md mx-auto mb-20">
  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out flex flex-col relative overflow-hidden">
    
    {/* Rocket Icon */}
    <div className=" bg-blue-100 text-blue-800 p-3 mb-4 rounded-full shadow-md shadow-slate-500 mx-auto">
      <Rocket className="w-6 h-6" />
    </div>

    <h3 className="text-lg font-semibold text-slate-800 mb-2">Pay As You Go</h3>
    <div className="text-4xl font-bold text-blue-800 mb-1">$3</div>
    <p className="text-sm text-slate-600 mb-6 font-semibold">per delivery</p>
    <ul className="text-sm text-slate-800 space-y-2 flex-1 text-left">
      <li className="flex items-start gap-2">
        <CheckCircle className="w-4 h-4 text-blue-800 mt-0.5" />
        No Monthly Subscription
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle className="w-4 h-4 text-blue-800 mt-0.5" />
        No Hidden Costs
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle className="w-4 h-4 text-blue-800 mt-0.5" />
        Predictable Expense
      </li>
      <li className="flex items-start gap-2">
        <CheckCircle className="w-4 h-4 text-blue-800 mt-0.5" />
        Standard Support
      </li>
    </ul>
    <button className="mt-6 bg-blue-500 text-white rounded-md py-2 px-4 font-medium hover:bg-blue-700 transition">
      Get Started
    </button>
  </div>
</div>


    {/* Premium Subscriptions Header */}
    <h3 className="text-2xl font-semibold text-slate-800 mb-4">Premium Subscriptions</h3>
    <div className="mb-12 flex items-center justify-center gap-3">
      <span className={` font-bold ${!yearly ? "text-blue-600" : "text-slate-600"}`}>Monthly</span>
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
      <span className={` font-bold ${yearly ? "text-blue-600" : "text-slate-600"}`}>Yearly <span className="text-green-600 font-semibold">(2 months free)</span></span>
    </div>

    {/* Subscription Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      
      {/* Solo */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out flex flex-col">

        <h3 className="text-lg font-semibold text-slate-800 mb-2">Solo</h3>
        <div className="text-4xl font-bold text-blue-800 mb-1">${pricing.solo}</div>
        <p className="text-sm text-slate-600 mb-6 font-semibold">{yearly ? "per year" : "per month"}</p>
        <ul className="text-sm text-slate-800 space-y-2 flex-1 text-left">
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-800 mt-0.5" /> 15 Deliveries</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-800 mt-0.5" /> Property Sites Included</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-800 mt-0.5" /> Unused Listings Roll Over</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-800 mt-0.5" /> Standard Support</li>
        </ul>
        <button className="mt-6 bg-blue-500 text-white rounded-md py-2 px-4 font-medium hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      {/* Growth – Featured */}
      <div className="relative bg-gradient-to-tr from-blue-500 to-indigo-950 text-white transition-all duration-300 delay-100 ease-out hover:scale-95 active:scale-95 rounded-2xl p-8 shadow-xl transform scale-105 flex flex-col z-10">

        <div className="absolute top-0 right-0 bg-white text-blue-800 text-xs font-bold px-4 py-1 rounded-br-xl rounded-tl-xl">
          Most Popular
        </div>
        <h3 className="text-lg font-semibold mb-2">Growth</h3>
        <div className="text-4xl font-bold mb-1">${pricing.growth}</div>
        <p className="text-sm mb-6">{yearly ? "per year" : "per month"}</p>
        <ul className="text-sm space-y-2 flex-1 text-left">
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-white mt-0.5" /> 40 Monthly Deliveries</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-white mt-0.5" /> Property Sites Included</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-white mt-0.5" /> Roll Over Listings</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-white mt-0.5" /> Standard Support</li>
        </ul>
        <button className="mt-6 bg-white text-blue-600 rounded-md py-2 px-4 font-medium hover:bg-slate-100 transition">
          Get Started
        </button>
      </div>

      {/* Pro */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out flex flex-col">

        <h3 className="text-lg font-semibold text-slate-800 mb-2">Pro</h3>
        <div className="text-4xl font-bold text-blue-800 mb-1">${pricing.pro}</div>
        <p className="text-sm text-slate-600 mb-6 font-semibold">{yearly ? "per year" : "per month"}</p>
        <ul className="text-sm text-slate-800 space-y-2 flex-1 text-left">
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-800 mt-0.5" /> 100 Monthly Deliveries</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-800 mt-0.5" /> Property Sites Included</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-800 mt-0.5" /> Unused Listings Roll Over</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-800 mt-0.5" /> Dedicated Support</li>
        </ul>
        <button className="mt-6 bg-blue-500 text-white rounded-md py-2 px-4 font-medium hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </div>
  </div>
</section>

      

  {/* Who is vilmora for section */}
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl  font-bold text-slate-900 mb-4 font-inter">
      Who VIMORA is For
    </h2>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
      
      {/* Real Estate Photographers */}
      <div className="p-6 border border-slate-200 rounded-xl shadow hover:shadow-lg transition">
        <Camera className="w-10 h-10 text-blue-700 mb-4" />
        <h3 className="text-xl font-semibold text-slate-900 mb-2">Real Estate Photographers</h3>
        <ul className="text-slate-600 text-sm space-y-2">
          <li>Deliver polished media fast without chasing payments.</li>
          <li>Impress agents with professional, branded listings.</li>
          <li>Spend less time managing files, more time shooting.</li>
        </ul>
      </div>

      {/* Media Teams */}
      <div className="p-6 border border-slate-200 rounded-xl shadow hover:shadow-lg transition">
        <Users className="w-10 h-10 text-blue-700 mb-4" />
        <h3 className="text-xl font-semibold text-slate-900 mb-2">Media Teams</h3>
        <ul className="text-slate-600 text-sm space-y-2">
          <li>Easily manage multiple shooters and deliveries in one place.</li>
          <li>Keep your workflow tight with built-in invoicing and media handoff.</li>
          <li>Scale your business without scaling your headaches.</li>
        </ul>
      </div>

      {/* Brokerages */}
      <div className="p-6 border border-slate-200 rounded-xl shadow hover:shadow-lg transition">
        <Building2 className="w-10 h-10 text-blue-700 mb-4" />
        <h3 className="text-xl font-semibold text-slate-900 mb-2">Brokerages</h3>
        <ul className="text-slate-600 text-sm space-y-2">
          <li>Centralize your team’s media under one sleek dashboard.</li>
          <li>Track, schedule, and distribute content effortlessly across agents.</li>
          <li>Keep branding consistent and get listings to market faster.</li>
        </ul>
      </div>
    </div>

    {/* CTA */}
    <div className="mt-12">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
        Get Started For Free
      </button>
    </div>
  </div>
      </section>
      



      {/* Everything You need */}
      <section className="bg-blue-50 py-20 px-6 rounded-t-[110px] md:rounded-t-[200px]">
  <div className="max-w-5xl mx-auto">
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
    <div className="max-w-5xl mx-auto mt-12">
  <EverythingYouNeedMarquee />
</div>


    {/* CTA */}
    <div className="mt-12 text-center">
      <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
        Get Started For Free
      </button>
    </div>
  </div>
</section>



      
{/* CTA */}
<section className="bg-gradient-to-b from-white via-blue-50 to-white  py-24 px-6 my-12 md:my-20">
       {/* Top - Email Form */}
    <div className="text-center shadow-md shadow-slate-200 p-7 md:p-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-9">Start Your 14 day free trial</h2>
      <form className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-4">
      <input
        type="email"
        placeholder="Your Email"
        className="w-full px-4 py-3 rounded-md bg-white text-slate-800 placeholder-slate-500 border border-slate-400 ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-400 focus:outline-none"
      />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 w-64 rounded-md hover:bg-blue-700 transition"
        >
          Get Started
        </button>
      </form>
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
      © 2025 All rights reserved
    </div>
  </div>
</footer>


    </>
  );
}
