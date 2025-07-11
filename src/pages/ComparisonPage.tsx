import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CheckCircle, DollarSign, UploadCloud, LayoutDashboard, Rocket } from "lucide-react";
import type { JSX } from "react";

export default function ComparisonPage(){
    return (
        <>
      <Navbar/>
    <div className="min-h-screen bg-gradient-to-b mt-20 pt-28 container from-white via-blue-50 to-white px-4 sm:px-6 lg:px-20 py-16 text-slate-800">
      <header className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4">
          <strong className="text-blue-900">VIMORA</strong> vs HDPhotoHub vs Spiro vs Aryeo
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
          Which Real Estate Photography Delivery Platform is Best For You?
        </p>
      </header>

      <div className="overflow-x-auto">
        <table className="w-full text-sm sm:text-base bg-white shadow-lg rounded-xl overflow-hidden border">
          <thead className="bg-blue-500 text-white text-left">
            <tr>
              <th className="p-4 font-semibold">Platform</th>
              <th className="p-4 font-semibold">VIMORA</th>
              <th className="p-4 font-semibold">HDPhotoHub</th>
              <th className="p-4 font-semibold">Spiro</th>
              <th className="p-4 font-semibold">Aryeo</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {[
              ["Cost per Delivery", "$3 pay-as-you-go, as low as $1.20 w/ plan", "$5–$10", "$5", "$4.90–$17.40"],
              ["Storage Policy", "12 months, easily extended", "Unclear, long-term cost unknown", "Not documented", "Included, capped by listings"],
              ["Revision Requests", "Built-in, tracked, chargeable", "Email-based notes", "Not supported", "Basic comment feature"],
              ["White Glove Brokerage Support", "Yes (custom onboarding)", "No", "No", "Enterprise only"],
              ["User Experience", "Modern (2025-level)", "Feels like 2015", "Fast but basic", "Clean but heavy"],
              ["Property Websites", "Premium, modern", "Dated, clunky", "Clean, basic", "Customizable, complex"],
              ["Who's It For?", "Photographers, teams, brokerages", "Solo photographers", "Solo photographers", "Media companies, brokerages"],
              ["Built By", "Active RE photographers", "1990s RE photographer", "Indie Devs", "Zillow"]
            ].map(([label, vimora, hdp, spiro, aryeo], idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-blue-50" : "bg-white"}>
                <td className="p-4 font-medium text-slate-700">{label}</td>
                <td className="p-4">{vimora}</td>
                <td className="p-4">{hdp}</td>
                <td className="p-4">{spiro}</td>
                <td className="p-4">{aryeo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-20 max-w-4xl mx-auto space-y-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
            Why We Recommend <span className="text-primary">VIMORA</span>
          </h2>
          <p className="text-slate-600 mt-2 text-lg">
            The best blend of affordability, modern UX, flexibility, and power — built specifically for real estate photographers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          <FeatureCard
            icon={<DollarSign className="w-8 h-8 text-blue-700" />}
            title="More Affordable"
            text="HDPH & Spiro charge 60–200% more — Aryeo even charges when you're not busy."
          />
          <FeatureCard
            icon={<UploadCloud className="w-8 h-8 text-blue-700" />}
            title="Built for Photographers"
            text="Not corporate. Not outdated. Just you and your clients."
          />
          <FeatureCard
            icon={<LayoutDashboard className="w-8 h-8 text-blue-700" />}
            title="Modern Features"
            text="Clean delivery experience, upsells, extended storage, 2025-level property sites."
          />
          <FeatureCard
            icon={<Rocket className="w-8 h-8 text-blue-700" />}
            title="Brokerage Ready"
            text="Custom onboarding, team roles, and workflows for power-house clients."
          />
        </div>

       
      </section>
      </div>
       <Footer/>
       </>
  );
};

const FeatureCard = ({ icon, title, text }: { icon: JSX.Element; title: string; text: string }) => (
  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow hover:shadow-md transition text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h4 className="text-xl font-bold text-slate-800 mb-2">{title}</h4>
    <p className="text-slate-600">{text}</p>
  </div>
);


