import { MailIcon, InfoIcon, Sparkles, Send, ImageIcon, HomeIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MeaningPage() {
    return (
        <>
     <Navbar/>
    <div className="pt-32  flex justify-center bg-gradient-to-b from-white via-blue-100 to-white">
      <div className="container mx-auto text-slate-800">
        {/* Header */}
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-center mb-6 font-inter text-blue-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Does <span className="text-primary">VIMORA</span> Mean?
        </motion.h1>

        <p className="text-center text-lg sm:text-xl mb-12 text-slate-700">
          Vi (vee) - mo (m'oh') - ra (r'ah'): <strong>Send Dwelling Images</strong>
        </p>

        {/* Language Roots Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <HomeIcon className="mx-auto text-blue-700 mb-2" size={32} />
            <p className="font-semibold">Vivienda</p>
            <p className="text-sm text-slate-600">Spanish – “Dwelling” or “Residence”</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <ImageIcon className="mx-auto text-blue-700 mb-2" size={32} />
            <p className="font-semibold">Imago</p>
            <p className="text-sm text-slate-600">Latin – “Image” or “Representation”</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <Send className="mx-auto text-blue-700 mb-2" size={32} />
            <p className="font-semibold">Enviar</p>
            <p className="text-sm text-slate-600">Spanish/Portuguese – “To Send”</p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white p-8 rounded-3xl shadow-xl space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
          <p>
            When coming up with a name for <strong>VIMORA</strong>, Arbaz, my co-founder, and I struggled quite a bit.
            First we were REPHUB, then SnapConnect, then SnapSync, then SnapHQ (lots of snaps here!).
          </p>
          <p>
            None of those really clicked, so we decided to be a bit more creative. I had the idea of diving into
            different languages, pulling from words about houses, images, delivery, and property.
          </p>
          <p>
            We spent days mixing and matching words from over 100 languages and nearly 200 root terms until we
            stumbled across <strong>VIMORA</strong>.
          </p>
          <p>
            It might sound like a spell from a fantasy novel, but it perfectly reflects what we do: <em>send images of homes</em>,
            quickly, beautifully, and affordably.
          </p>
          <p>
            I always wondered how brands came up with names — so here’s your answer, straight from us to you.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold text-center text-blue-900 mb-6">Why Use VIMORA?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              'Ridiculously Easy to Use – No learning curve. Just upload, deliver, and get paid.',
              'Cheapest in the Game – Lower fees than Aryeo, Spiro, or HDPhotoHub.',
              'Fast File Delivery – Clients get media instantly in a clean, branded layout.',
              'Built for Real Estate Creators – Designed by working media pros.',
              'Automated Workflows – File delivery, payments, and marketing handled.',
              'Client-Friendly Interface – Looks pro, feels intuitive.',
              'Mobile-Optimized – Works flawlessly on phones or desktops.',
              'All-in-One Platform – No need for multiple tools.',
              'Constantly Improving – Feedback-based updates, monthly releases.',
              "You're Not Locked In – No contracts. No nonsense.",
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow hover:shadow-md transition">
                <Sparkles className="text-blue-700 mt-1" size={20} />
                <p className="text-slate-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
      
      </div>
            </div>
            <Footer/>
            </>
  );
}
