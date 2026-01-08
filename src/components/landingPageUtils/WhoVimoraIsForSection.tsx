



const WhoVimoraIsForSection = () => {

 return (
          
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
    )
}

export default WhoVimoraIsForSection;