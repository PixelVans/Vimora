



export const CollaborationSection = () => {

return (

        <section className="relative bg-white py-12 xl:py-28 md:px-16 overflow-hidden">
        {/* background accents */}
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
            <div className="absolute -inset-6 bg-gradient-to-tr from-orange-200/40 via-blue-100/30 to-transparent blur-3xl rounded-full" />

            
            {/* Mobile (stacked overlap, ) */}
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
        <div className="xl:w-1/2 space-y-5">
            {[
                {
                id: 1,
                title: "Revisions",
                text: "Clients can request edits directly in the project, so you never lose track of feedback. Every version stays organized and visible.",
                color: "from-blue-400 via-sky-400 to-cyan-300",
                glow: "group-hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]",
                },
                {
                id: 2,
                title: "Communication",
                text: "Stay connected with built-in chat and notifications. Discuss project details without leaving the Vimora workspace.",
                color: "from-orange-300 via-orange-300 to-orange-300",
                glow: "group-hover:shadow-[0_0_25px_rgba(251,191,36,0.4)]",
                },
                {
                id: 3,
                title: "Teams & Delegation",
                text: "Assign roles, manage assistants, or invite editors. Vimora makes teamwork fluid and transparent for every project.",
                color: "from-slate-100 via-gray-100 to-gray-100",
                glow: "group-hover:shadow-[0_0_25px_rgba(148,163,184,0.4)]",
                },
            ].map((feature) => (
                <div
                key={feature.id}
                className={`group relative flex flex-col gap-2 rounded-xl p-[1px] bg-gradient-to-r ${feature.color} ${feature.glow} transition-all duration-500`}
                >
                {/* Inner card */}
                <div className="flex flex-col gap-2 rounded-[10px] bg-slate-950/80 p-6 backdrop-blur-xl transition-all duration-500 group-hover:bg-slate-900/80">
                    <h3
                    className={`text-lg font-semibold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent tracking-tight`}
                    >
                    {feature.title}
                    </h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-md">
                    {feature.text}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>

    )
};

export default CollaborationSection;