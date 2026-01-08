import { ChevronDownIcon } from "lucide-react";



const PropellingSection = () => {
  
    return (
          
    <section className="bg-slate-100 py-20 px-4 sm:px-6 rounded-tl-none rounded-tr-[100px] md:rounded-tr-[200px] lg:rounded-tr-[250px] mt-5 md:mt-9  shadow-md">
      <div className="max-w-5xl 2xl:max-w-7xl  mx-auto text-center">

    {/* Heading */}
    <h2 className="text-2xl sm:text-4xl 2xl:text-5xl font-bold mb-4 leading-tight">
      <span className="inline-block bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 bg-clip-text text-transparent pb-1">
        Propelling You Forward.
      </span>
    </h2>
    <p className="text-slate-700 text-sm sm:text-lg max-w-6xl mx-auto mb-10 px-2 md:px-9 lg:px-0">
        We took all the best aspects of every real estate media delivery platform and streamlined it,
        improving upon the user experience in every way so you don't have something holding you back,
        you have something propelling you forward.
      </p>


     {/* Down Arrow */}
    <ChevronDownIcon className="h-9 w-9 text-blue-600 mx-auto mb-6 animate-bounce" />



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
              img: "/media/listings.png",
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
            const imageOnRight = index % 2 === 0; 
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
    );
};

export default PropellingSection;
