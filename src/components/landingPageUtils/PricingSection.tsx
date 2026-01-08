import { CheckCircle, Crown, Rocket, TrendingUp, User } from "lucide-react"
import { useState } from "react";



const PricingSection = () => {
    
    const [yearly, setYearly] = useState(false);
    const toggleBilling = () => setYearly(!yearly);

    const pricing = {
      solo: yearly ? 500 : 50,
      growth: yearly ? 800 : 80,
      pro: yearly ? 1200 : 120,
    };

  return (
  <section className="scroll-mt-20 container rounded-3xl py-20 px-6 shadow bg-gradient-to-b from-blue-50 to-blue-200 mt-9"
            id="pricing" >
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

    )
}


export default PricingSection;