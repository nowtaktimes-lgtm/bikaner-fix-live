"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Phone, Star, ShieldCheck, Clock, Zap, ArrowRight, CheckCircle2, MapPin, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

// --- IMPORTS (Connecting the found files) ---
import { FomoToast } from '@/components/ui/FomoToast';
import ServiceGrid from '@/components/ServiceGrid';
import BenefitGrid from '../components/BenefitGrid';
import { TechnicianCard } from '@/components/TechnicianCard';
import FAQMap from '@/components/FAQMap';
import { ChatTestimonials } from '@/components/ui/ChatTestimonials';

export default function Home() {
  const [showMore, setShowMore] = useState(false);

  const topLocations = [
    "JNV Colony", "Pawanpuri", "Sadul Ganj", "Rani Bazar",
    "Gangashahar", "Nokha", "Napasar", "Deshnoke"
  ];

  const commonFaqs = [
    { question: "Do you provide warranty?", answer: "Yes, 30-day warranty on all services." },
    { question: "Is there a visiting charge?", answer: "₹199 base charge, waived if service is taken." },
    { question: "How fast do you reach?", answer: "30-45 minutes in Bikaner city." }
  ];

  return (
    <>
      <FomoToast locationName="Bikaner" isRotating={true} />

      <div className="w-full font-sans">

        {/* HERO SECTION (Inline for Homepage Specifics) */}
        <div className="flex-none">
          <section className="relative pt-24 pb-16 md:pt-36 md:pb-24 px-4 overflow-hidden bg-slate-50">
            {/* Background Gradients & Orbs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-br from-blue-300/40 via-purple-300/40 to-cyan-300/40 blur-[100px] rounded-full pointer-events-none -z-0"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-orange-200/30 to-rose-200/30 blur-[100px] rounded-full pointer-events-none -z-0"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none z-0 mix-blend-multiply"></div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-lg border border-white/50 px-4 py-2 rounded-full text-slate-800 text-xs md:text-sm font-semibold mb-8 shadow-sm hover:shadow-md transition-shadow">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                Active in 500+ Areas across Bikaner
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold mb-6 tracking-tight leading-[1.05] text-slate-900">
                Professional Home<br />
                <span className="relative inline-block mt-2">
                  <span className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-indigo-100 blur-xl opacity-50 rounded-full"></span>
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 drop-shadow-sm">
                    Repair Services
                  </span>
                </span>
              </h1>

              {/* Tagline */}
              <p className="text-lg md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
                <span className="text-slate-900 font-bold bg-blue-100/50 px-2 py-1 rounded-md">AI-Dispatched Technicians.</span> Arriving in under 30 minutes.
              </p>

              {/* Action Buttons & Trust Indicators */}
              <div className="flex flex-col items-center gap-8">
                <a href={`tel:${siteConfig.contact.phone}`} className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white text-lg md:text-xl font-bold py-4 px-8 md:py-5 md:px-12 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-900/20 active:scale-95 transition-all transform hover:-translate-y-1 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-white/20 to-blue-600/0 -translate-x-full group-hover:animate-shimmer skew-x-12"></div>
                  <Phone className="w-6 h-6 md:w-7 md:h-7 animate-wiggle group-hover:animate-none group-hover:scale-110 transition-transform relative z-10" />
                  <span className="relative z-10">Book Now</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
                </a>

                <div className="flex flex-wrap items-center justify-center gap-4 text-slate-600 text-sm md:text-base font-semibold">
                  <div className="flex items-center gap-1.5"><ShieldCheck className="w-5 h-5 text-green-500" /> Verified Pros</div>
                  <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                  <div className="flex items-center gap-1.5"><Clock className="w-5 h-5 text-blue-500" /> 24/7 Support</div>
                  <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                  <div className="flex items-center gap-1.5"><Zap className="w-5 h-5 text-orange-500" /> Fixed Prices</div>
                </div>
              </div>
            </div>

            {/* Floating Trust Cards - Decorative & Engaging */}
            <div className="absolute top-1/4 left-10 hidden lg:flex flex-col gap-3 p-4 bg-white/60 backdrop-blur-xl rounded-2xl border border-white shadow-xl shadow-slate-200/50 animate-float">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-4">
                  {/* eslint-disable @next/next/no-img-element */}
                  <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                  <img src="https://i.pravatar.cc/100?img=2" alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                  <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                  {/* eslint-enable @next/next/no-img-element */}
                </div>
                <div>
                  <div className="flex text-yellow-500 mb-0.5">
                    <Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <p className="text-xs text-slate-600 font-bold whitespace-nowrap">10k+ Loved Users</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-1/4 right-10 hidden lg:flex items-center gap-3 p-4 bg-white/60 backdrop-blur-xl rounded-2xl border border-white shadow-xl shadow-slate-200/50 animate-float-delayed">
              <div className="bg-green-100 p-2.5 rounded-full text-green-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Arrival Time</p>
                <p className="text-sm text-slate-900 font-extrabold whitespace-nowrap">Under 30 Mins</p>
              </div>
            </div>

          </section>
        </div>

        <div className="mt-8 md:mt-0">
          <ServiceGrid />
        </div>

        {/* "VIEW MORE" TOGGLE BUTTON */}
        {!showMore && (
          <div className="flex justify-center px-4 py-8 mb-12">
            <button
              onClick={() => setShowMore(true)}
              className="flex items-center gap-2 bg-white text-slate-700 font-bold border-2 border-slate-200 px-8 py-4 rounded-full shadow-sm hover:shadow-md hover:border-slate-300 active:scale-95 transition-all w-full md:w-auto justify-center"
            >
              View More Details <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* HIDDEN CONTENT (Revealed on 'View More' click) */}
        {(showMore || true) && ( // We use CSS hiding for desktop to ensure SEO footprint remains
          <div className={`${showMore ? 'block' : 'hidden md:block'} animate-in fade-in slide-in-from-bottom-8 duration-700`}>

            <div>
              <BenefitGrid />
            </div>

            <div>
              <div id="reviews">
                <ChatTestimonials />
              </div>
            </div>

            <div>
              <section className="py-20 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                      Top Rated Technicians
                    </span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    <TechnicianCard
                      locationName="JNV Colony"
                      name="Rajesh Kumar"
                      rating={4.9}
                      jobs={1240}
                      specialty="AC Repair Expert"
                    />
                    <TechnicianCard
                      locationName="Nokha"
                      name="Amit Bishnoi"
                      rating={4.8}
                      jobs={980}
                      specialty="Refrigerator Wizard"
                    />
                    <TechnicianCard
                      locationName="Gangashahar"
                      name="Suresh Verma"
                      rating={4.9}
                      jobs={850}
                      specialty="Washing Machine Pro"
                    />
                  </div>
                </div>
              </section>
            </div>

            <div>
              <FAQMap faqs={commonFaqs} serviceName="Home Services" locationName="Bikaner" />
            </div>

            {/* SEO FOOTER GRID */}
            <div className="pb-24 md:pb-0">
              <section className="py-16 bg-white border-t border-slate-200 text-center">
                <div className="max-w-4xl mx-auto px-4">
                  <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-6">Serving All Neighborhoods in Bikaner</h3>
                  <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {topLocations.map((loc) => (
                      <Link key={loc} href={`/ac-repair-service/${loc.toLowerCase().replace(/ /g, '-')}`} className="bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-slate-700 text-sm hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors shadow-sm font-medium">
                        {loc}
                      </Link>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <Link href="/service-areas" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold bg-blue-50 hover:bg-blue-100 px-6 py-3 rounded-xl transition-all border border-blue-200 shadow-sm active:scale-95">
                      <MapPin className="w-5 h-5 text-blue-500" /> View All 500+ Service Areas <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </section>
            </div>

          </div>
        )}

      </div>
    </>
  );
}
