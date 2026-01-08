const CtaSection = () => {

  return (
    <section className="px-4 sm:px-6 pb-5 mt-9">
  <div className="max-w-4xl mx-auto bg-gradient-to-b from-white via-blue-50 to-blue-100 rounded-3xl shadow-md shadow-slate-300 overflow-hidden">
    
    <div className="p-6 sm:p-12 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
        Get Your First 5 Deliveries For Free!
      </h2>

      <p className="mb-8 mt-3 text-slate-700">
        No contracts. No hidden fees. Cancel anytime.
      </p>

      <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Your email"
          className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-white text-slate-900 placeholder-slate-400 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
        />

        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
        >
          Get started for free
        </button>
      </form>
    </div>

  </div>
</section>
  )
};

export default CtaSection;
