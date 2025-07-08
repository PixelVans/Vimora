import Navbar from "@components/Navbar";
import { DollarSignIcon, Share2Icon, UploadIcon, Camera, Users, Building2,FileText, Globe, Layers3, UserCircle2,
  Repeat, Zap, Settings2, Palette,CheckCircle2,Mail, Twitter, Facebook, Youtube, Instagram,
  Database, ShieldCheck,  ShoppingCart } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

// Sample testimonials data
const testimonials = [
  {
    name: "Marisela A.",
    title: "Owner - Twin Lakes Photography",
    quote: "The pay as you go plan is so much better. I did the math and I'm saving like, 70% on delivery costs. Works good, I'm happy.",
    image: "/avatars/marisela.jpg",
  },
  {
    name: "Christina E.",
    title: "Owner - Marketplace Photography",
    quote: "My clients LOVE LOVE LOVE VIMORA. Some realtors aren't really that techy, so having an interface that's designed so ANYONE can use it is just so helpful.",
    image: "/avatars/christina.jpg",
  },
  {
    name: "Justin T.",
    title: "Owner - Chicago REP",
    quote: "VIMORA just works so much better. I moved from photohub and it just looks so clean, and I'm paying LESS.",
    image: "/avatars/justin.jpg",
  },
  {
    name: "Ronald M.",
    title: "Owner - SnapHome Media",
    quote: "It's clean, it's cheap, and the invoices with line items make my clients so much happier.",
    image: "/avatars/ronald.jpg",
  },
  {
    name: "Thomas T.",
    title: "Owner - Pen RE Media Group",
    quote: "Easy to use and snappy. I like them property websites.",
    image: "/avatars/thomas.jpg",
  },
  {
    name: "JJ.",
    title: "Owner - Pen RE Media Group",
    quote: "Easy to use and snappy. I like them property websites.",
    image: "/avatars/thomas.jpg",
  },
];


function MarqueeRow({ items, reverse = false, speed = 50 }) {
  const controls = useAnimation();
  const rowRef = useRef();

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
                className="w-9 h-9 rounded-full object-cover border border-blue-500"
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
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <section className="container pt-24 min-h-[100dvh] flex justify-center">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    
    {/* Text Content */}
    <div className="space-y-6 lg:space-y-9">
      <div className="text-4xl sm:text-5xl font-bold leading-tight font-inter text-slate-800 flex flex-col space-y-2 ">
        <h1>Better than Spiro.</h1>
        <h1>Cheaper than Aryeo.</h1>
        <h1 className="text-primary">Easier than Both.</h1>
      </div>

      <p className="text-lg text-slate-700">
              <strong>VIMORA</strong> is the all-in-one platform for real estate photographers to upload & deliver real estate media,
              and get paid: All without the dated and clunky tools or high monthly fees.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
          Get Started For Free
        </button>
        <button className="bg-white ring-1 ring-primary text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
          Compare Between Competitors
        </button>
      </div>
    </div>

    {/* Image Section */}
    <div className="flex justify-center lg:justify-end">
      <img
        src="/Banner.png"
        alt="Landing visual"
        className="max-w-full h-auto rounded-xl shadow-md"
      />
    </div>

  </div>
      </section>


      
      {/* propelling section */}

    <section className="bg-slate-100 py-20 px-6 rounded-t-[250px] rounded-tl-none shadow-md">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-950 to-blue-600 text-transparent bg-clip-text">
      Propelling You Forward.
    </h2>

        <p className="text-slate-700 text-lg max-w-2xl mx-auto mb-12  ">
          We took all the best aspects of every real estate media delivery platform and streamlined it,
          improving upon the user experience in every way so you don't have something holding you back -
          you have something propelling you forward.
        </p>

        {/* Subheading */}
        <h3 className="text-2xl font-semibold text-slate-800 mb-10">
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
      

      <section className="bg-white py-24 px-6 md:px-9">
  <div className="max-w-full mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 text-center bg-gradient-to-r
     from-blue-500 to-blue-700 text-transparent bg-clip-text">
      Over 650,000 Images Delivered
          </h2>
          <div className="text-center mb-12">
  <h3 className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-2">
  The Proof Is in the Platform
  </h3>
  <p className="text-slate-600 text-lg">
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
        <MarqueeRow items={testimonials} speed={60} />
        <MarqueeRow items={testimonials} speed={40} />
      </div>
    </div>
  </div>
      </section>
      


      {/* key feature of vimora */}
      <section className="bg-slate-50 py-20 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-slate-900 mb-4 font-inter">
      Key VIMORA Features
    </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12 text-left divide-y sm:divide-y-0 
    sm:divide-x border-t border-slate-300 divide-slate-300 pt-10">
      
      {/* Feature Item */}
      <div data-aos="fade-up" className="px-4 flex flex-col items-center text-center space-y-3">
        <FileText className="w-8 h-8 text-blue-600" />
        <h3 className="font-semibold text-slate-900">Line-Itemed Invoices</h3>
        <p className="text-sm text-slate-600">
          Never chase payments again. VIMORA generates line-itemed invoices and collects payment before download.
        </p>
      </div>

            <div data-aos="fade-up" className="px-4 flex flex-col items-center text-center space-y-3">
        <Globe className="w-8 h-8 text-blue-600" />
        <h3 className="font-semibold text-slate-900">Premium Property Websites</h3>
        <p className="text-sm text-slate-600">
          Beautiful, mobile-friendly listing sites included in Growth and Pro tiers — all at no additional cost!
        </p>
      </div>

            <div data-aos="fade-up" className="px-4 flex flex-col items-center text-center space-y-3">
        <Layers3 className="w-8 h-8 text-blue-600" />
        <h3 className="font-semibold text-slate-900">Built For Scale</h3>
        <p className="text-sm text-slate-600">
          Whether you're solo or managing 20+, VIMORA handles media, payments, edits, and scheduling in one place.
        </p>
      </div>

            <div data-aos="fade-up" className="px-4 flex flex-col items-center text-center space-y-3">
        <UserCircle2 className="w-8 h-8 text-blue-600" />
        <h3 className="font-semibold text-slate-900">Modern Client Portals</h3>
        <p className="text-sm text-slate-600">
          Branded, easy-to-use delivery pages with everything your clients need — photos, videos, floor plans, and links.
        </p>
      </div>

      <div data-aos="fade-up" className="px-4 flex flex-col items-center text-center space-y-3">
        <Repeat className="w-8 h-8 text-blue-600" />
        <h3 className="font-semibold text-slate-900">Built-In Revision System</h3>
        <p className="text-sm text-slate-600">
          Let clients request sky swaps, object removals, or special edits — with optional add-on charges.
        </p>
      </div>

      <div data-aos="fade-up" className="px-4 flex flex-col items-center text-center space-y-3">
        <Zap className="w-8 h-8 text-blue-600" />
        <h3 className="font-semibold text-slate-900">Clean, Lightning-Fast UX</h3>
        <p className="text-sm text-slate-600">
          Built for 2025 & beyond. No bloated menus or clunky dashboards — just speed and simplicity.
        </p>
      </div>

      <div data-aos="fade-up" className="px-4 flex flex-col items-center text-center space-y-3">
        <Settings2 className="w-8 h-8 text-blue-600" />
        <h3 className="font-semibold text-slate-900">Ultimate Flexibility</h3>
        <p className="text-sm text-slate-600">
          Flexible pricing for creators and teams — use what you need. Unused credits roll over!
        </p>
      </div>

      <div data-aos="fade-up" className="px-4 flex flex-col items-center text-center space-y-3">
        <Palette className="w-8 h-8 text-blue-600" />
        <h3 className="font-semibold text-slate-900">Branded Delivery</h3>
        <p className="text-sm text-slate-600">
          Your logo. Your colors. Your domain. VIMORA puts your brand front and center.
        </p>
      </div>

      <div data-aos="fade-up" className="px-4 flex flex-col items-center text-center space-y-3">
        <Database className="w-8 h-8 text-blue-600" />
        <h3 className="font-semibold text-slate-900">Storage Transparency</h3>
        <p className="text-sm text-slate-600">
          One month of active access, eleven months archived, then optional deletion or extension.
        </p>
      </div>

      <div data-aos="fade-up" className="px-4 flex flex-col items-center text-center space-y-3">
        <ShieldCheck className="w-8 h-8 text-blue-600" />
        <h3 className="font-semibold text-slate-900">Team Permissions & Roles</h3>
        <p className="text-sm text-slate-600">
          Assign roles for admins, shooters, editors — perfect for media companies and brokerages.
        </p>
      </div>

      <div data-aos="fade-up" className="px-4 flex flex-col items-center text-center space-y-3">
        <Users className="w-8 h-8 text-blue-600" />
        <h3 className="font-semibold text-slate-900">Referral & Affiliate Tools</h3>
        <p className="text-sm text-slate-600">
          Reward loyal clients and attract new ones with built-in affiliate tracking and free months of VIMORA.
        </p>
      </div>

      <div data-aos="fade-up" className="px-4 flex flex-col items-center text-center space-y-3">
        <ShoppingCart className="w-8 h-8 text-blue-600" />
        <h3 className="font-semibold text-slate-900">Enhanced Shopping Cart</h3>
        <p className="text-sm text-slate-600">
          Smart upsells increase your AOV — give your clients more value and earn more per sale.
        </p>
      </div>
    </div>
  </div>
</section>





  
      {/* pricing section */}
      <section className="container rounded-3xl py-24 px-6 bg-gradient-to-b from-blue-50 to-blue-200 mt-9" id="pricing">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-slate-900 mb-4 font-inter">
      Find the Right Plan for You
    </h2>
    <p className="text-slate-600 text-lg mb-16">
      Transparent pricing. No surprises. Just pure value.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      
      {/* Pay As You Go */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow hover:shadow-lg transition flex flex-col">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">Pay As You Go</h3>
        <div className="text-4xl font-bold text-blue-600 mb-1">$3</div>
        <p className="text-sm text-slate-600 mb-6 font-semibold">per delivery</p>
        <ul className="text-sm text-slate-800 space-y-2 flex-1 text-left">
          <li> No Subscription</li>
          <li> Predictable Costs</li>
          <li> Standard Support</li>
        </ul>
        <button className="mt-6 bg-blue-600 text-white rounded-md py-2 px-4 font-medium hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      {/* Solo */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow hover:shadow-lg transition flex flex-col">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">Solo</h3>
        <div className="text-4xl font-bold text-blue-600 mb-1">$40</div>
        <p className="text-sm text-slate-600 mb-6 font-semibold">per month</p>
        <ul className="text-sm text-slate-800 space-y-2 flex-1 text-left ">
          <li>15 Deliveries</li>
          <li>Roll Over Listings</li>
          <li> Standard Support</li>
        </ul>
        <button className="mt-6 bg-blue-600 text-white rounded-md py-2 px-4 font-medium hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      {/* Growth — FEATURED */}
            <div className="relative bg-gradient-to-tr from-blue-500 to-indigo-950 text-white rounded-2xl p-8 shadow-xl 
      transform scale-105 flex flex-col z-10">
        <div className="absolute top-0 right-0 bg-white text-blue-800 text-xs font-bold px-3 py-1 rounded-br-xl rounded-tl-xl">
          Most Popular
        </div>
        <h3 className="text-lg font-semibold mb-2">Growth</h3>
        <div className="text-4xl font-bold mb-1">$70</div>
        <p className="text-sm mb-6">per month</p>
        <ul className="text-sm space-y-2 flex-1 text-left ">
          <li> 40 Monthly Deliveries</li>
          <li> Property Sites Included</li>
          <li> Roll Over Listings</li>
          <li> Standard Support</li>
        </ul>
        <button className="mt-6 bg-white text-blue-600 rounded-md py-2 px-4 font-medium hover:bg-slate-100 transition">
          Get Started
        </button>
      </div>

      {/* Pro */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow hover:shadow-lg transition flex flex-col">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">Pro</h3>
        <div className="text-4xl font-bold text-blue-600 mb-1">$120</div>
        <p className="text-sm text-slate-600 mb-6 font-semibold">per month</p>
        <ul className="text-sm text-slate-800 space-y-2 flex-1 text-left">
          <li> 100 Monthly Deliveries</li>
          <li> Roll Over Listings</li>
          <li> Dedicated Support</li>
        </ul>
        <button className="mt-6 bg-blue-600 text-white rounded-md py-2 px-4 font-medium hover:bg-blue-700 transition">
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
    <h2 className="text-4xl font-bold text-slate-900 mb-4 font-inter">
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
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
        Get Started For Free
      </button>
    </div>
  </div>
      </section>
      

  <section className="bg-blue-50 py-20 px-6 rounded-t-[200px]">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-slate-900 mb-4 font-inter leading-snug">
      Everything You Need. <br className="hidden sm:block" /> Nothing You Don’t.
    </h2>
    <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-12">
      VIMORA cuts the fluff and gives you the real estate media delivery platform that works exactly how it should.
    </p>

    {/* Flex Items */}
    <div className="flex flex-wrap justify-center gap-6 sm:gap-10 max-w-4xl mx-auto">
      {[
        "Clean, branded delivery pages",
        "Automated payment collection",
        "Client access tracking",
        "Lightning fast uploads",
        "Affordable, down-to-earth pricing",
        "No contracts, no hidden fees",
        "Built-in upsell tools",
        "Modern property websites",
        "Agent-friendly user interface for simple use",
      ].map((item, idx) => (
        <div
          key={idx}
          className="flex items-center space-x-3 text-slate-700 text-base"
          data-aos="fade-up"
          data-aos-delay={idx * 50}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-600 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>{item}</span>
        </div>
      ))}
    </div>

    <div className="mt-12">
      <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
        Get Started For Free
      </button>
    </div>
  </div>
</section>

      
{/* CTA */}
<section className="bg-blue-900 text-white py-16 px-6 my-16">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Start Your 14 Day Free Trial Today
        </h2>
        <p className="text-white/80 text-lg">
          No contracts. No hidden fees. Cancel anytime.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-blue-100 transition">
          Start Your 14 Day Free Trial
        </button>
      </div>
    </section>




   {/* footer section */}
<footer className="bg-white text-slate-800 pt-16 pb-8 px-6 mt-9">
  <div className="max-w-7xl mx-auto space-y-16">
    
    {/* Top - Email Form */}
    <div className="text-center">
      <h2 className="text-4xl font-bold text-slate-900 mb-9">Try VIMORA For Free</h2>
      <form className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-4">
      <input
        type="email"
        placeholder="Your Email"
        className="w-full px-4 py-3 rounded-md bg-white text-slate-800 placeholder-slate-500 border border-slate-400 ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-400 focus:outline-none"
      />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 w-64 rounded-md hover:bg-blue-700 transition"
        >
          Get Started
        </button>
      </form>
    </div>

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
