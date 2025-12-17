import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  DollarSign,
  UploadCloud,
  LayoutDashboard,
  Rocket
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ComparisonPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen container bg-gradient-to-b mt-20 pt-20 from-white via-blue-50 to-white px-4 sm:px-6 lg:px-20 py-16 text-slate-800">
        <header className="text-center mb-16">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <strong className="text-blue-600">VIMORA</strong>{" "}
              <span className="text-slate-700 font-medium">
                vs HDPhotoHub vs Spiro vs Aryeo
              </span>

          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Which Real Estate Photography Delivery Platform is Best For You?
          </motion.p>
        </header>

        <div className="overflow-x-auto">
          <motion.table
            className="w-full text-sm sm:text-base bg-white shadow-xl rounded-xl overflow-hidden border"
            data-aos="fade-up"
          >
            <thead className="bg-blue-600 text-white text-left">
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
                ["Storage Policy", "12 months, easily extended", "Unclear, long-term cost unknown", "12 months", "Included, capped by listings"],
                ["Revision Requests", "Built-in, tracked, chargeable", "Email-based notes", "Not supported", "Basic comment feature"],
                ["White Glove Brokerage Support", "Yes (custom onboarding)", "No", "No", "Enterprise only"],
                ["User Experience", "Modern (2025-level)", "Feels like 2015", "Fast but basic", "Clean but heavy"],
                ["Property Websites", "Premium, modern", "Dated, clunky", "Clean, basic", "Customizable, complex"],
                ["Who's It For?", "Photographers, teams, brokerages", "Solo photographers", "Photographers, teams, brokerages", "Media companies, brokerages"],
                ["Built By", "Active RE photographers", "1990s RE photographer", "Indie Devs", "Zillow"]
              ].map(([label, vimora, hdp, spiro, aryeo], idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-blue-50" : "bg-white"}>
                  <td className="p-4 font-semibold text-blue-950">{label}</td>
                  <td className="p-4">{vimora}</td>
                  <td className="p-4">{hdp}</td>
                  <td className="p-4">{spiro}</td>
                  <td className="p-4">{aryeo}</td>
                </tr>
              ))}
            </tbody>
          </motion.table>
        </div>

        {/* Recommendation Section */}
        <section className="mt-24 max-w-5xl mx-auto space-y-14">
          <motion.div
            className="text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
              Why We Recommend <span className="text-blue-700">VIMORA</span>
            </h2>
            <p className="text-slate-600 mt-3 text-lg">
              The best blend of affordability, modern UX, flexibility, and power — built specifically for real estate photographers.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-10">
            {[
              {
                title: "More Affordable",
                icon: DollarSign,
                text: "HDPH & Spiro charge 60–200% more — Aryeo even charges when you're not busy."
              },
              {
                title: "Built for Photographers",
                icon: UploadCloud,
                text: "Not corporate. Not outdated. Just you and your clients."
              },
              {
                title: "Modern Features",
                icon: LayoutDashboard,
                text: "Clean delivery experience, upsells, extended storage, 2025-level property sites."
              },
              {
                title: "Brokerage Ready",
                icon: Rocket,
                text: "Custom onboarding, team roles, and workflows for power-house clients."
              }
            ].map(({ title, icon: Icon, text }, idx) => (
              <motion.div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center"
                data-aos="fade-up"
                data-aos-delay={100 * (idx + 1)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-8 h-8 text-blue-700" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">{title}</h4>
                <p className="text-slate-600">{text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
