import Link from 'next/link';
import * as Icons from 'lucide-react';
import { services } from '@/data/services';

const cardTheme = [
    "from-[#2563EB] to-[#1D4ED8]", // Blue
    "from-[#4F46E5] to-[#3730A3]", // Indigo
    "from-[#7C3AED] to-[#5B21B6]", // Purple
    "from-[#059669] to-[#065F46]", // Emerald
    "from-[#D97706] to-[#92400E]", // Amber
    "from-[#0891B2] to-[#164E63]", // Cyan
];

export default function ServiceGrid() {
    return (
        <section id="services" className="py-8 md:py-16 px-3 md:px-4 relative z-20">


            <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
                {services.map((service, index) => {
                    const gradient = cardTheme[index % cardTheme.length];
                    const shortName = service.shortName || service.name.replace(" Service", "").replace(" Repair", "");

                    return (
                        <Link
                            key={service.slug}
                            href={`/${service.slug}/bikaner`}
                            className={`group relative overflow-hidden rounded-xl md:rounded-2xl hover:shadow-2xl hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 flex flex-col p-4 md:p-6 bg-gradient-to-b ${gradient} h-44 md:h-60 text-white`}
                        >
                            <div className="relative z-10 flex flex-col justify-start h-full">
                                {/* Title */}
                                <h3 className="text-lg md:text-3xl font-extrabold leading-[1.1] mb-1 md:mb-2 uppercase tracking-tight drop-shadow-md w-[80%] md:w-[70%] lg:whitespace-normal sm:whitespace-nowrap whitespace-normal line-clamp-2 md:line-clamp-none">
                                    {shortName}
                                </h3>
                                {/* Subtitle */}
                                <p className="text-[10px] md:text-sm text-white/90 font-medium drop-shadow-sm flex items-center gap-1 w-[70%] leading-tight">
                                    {service.priceStart ? `Starts at ${service.priceStart}` : "Expert Service"}
                                </p>
                            </div>

                            {/* Image at Bottom Right (Rounded clipping to mimic cutout) */}
                            {service.heroImage && (
                                <div className="absolute bottom-0 right-0 w-[55%] h-[75%] md:w-[50%] md:h-[70%] transform group-hover:scale-105 transition-transform duration-500 origin-bottom-right z-0">
                                    <div className="w-full h-full rounded-tl-[2rem] md:rounded-tl-[3.5rem] overflow-hidden shadow-[-8px_-8px_20px_rgba(0,0,0,0.2)] border-t-[3px] border-l-[3px] border-white/20">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={service.heroImage} alt={service.name} className="w-full h-full object-cover object-center" />
                                    </div>
                                </div>
                            )}

                            {/* Bottom Left Action */}
                            <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1 text-[10px] md:text-sm font-bold bg-white/20 backdrop-blur-md text-white px-3 py-1.5 md:py-2 rounded-md shadow-sm group-hover:bg-white group-hover:text-black transition-all">
                                Explore <Icons.ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                            </div>
                        </Link>
                    )
                })}
            </div>

            {/* Highly Optimized SEO Content Block */}
            <div className="max-w-7xl mx-auto mt-20 pt-12 border-t border-slate-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Primary SEO Narrative */}
                    <div className="space-y-6 text-sm text-slate-600 leading-relaxed text-center md:text-left">
                        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            Bikaner&apos;s #1 Trusted Hub for <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                Expert Home Services & Repairs
                            </span>
                        </h2>

                        <p>
                            <strong>Fix Bikaner</strong> is widely recognized as the top-rated destination for professional home appliance repair and maintenance services across all major colonies in Bikaner. Whether you desperately need emergency <Link href="/ac-repair-service/jnv-colony" className="text-blue-600 hover:text-blue-800 hover:underline"><strong>AC Service in JNV Colony</strong></Link> to beat the scorching Rajasthan heat, or a certified <Link href="/electrician-service/pawanpuri" className="text-blue-600 hover:text-blue-800 hover:underline"><strong>Electrician in Pawanpuri</strong></Link> for urgent wiring issues, our platform connects you with Bikaner&apos;s best-verified technicians in under 30 minutes.
                        </p>

                        <p>
                            We don&apos;t just fix appliances; we restore peace of mind. Our extensive catalog includes comprehensive <Link href="/ro-service-repair/bikaner" className="text-blue-600 hover:text-blue-800 hover:underline"><strong>RO Water Purifier Service</strong></Link>, advanced <Link href="/washing-machine-repair/bikaner" className="text-blue-600 hover:text-blue-800 hover:underline"><strong>Washing Machine troubleshooting</strong></Link>, and safe, deep-cleaning capabilities for all household electronics. By leveraging our proprietary smart AI-dispatching system, we ensure that the nearest qualified expert is routed to your exact Bikaner location instantly.
                        </p>

                        <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                            <h3 className="text-lg text-slate-900 font-bold mb-3 flex items-center justify-center md:justify-start gap-2">
                                <Icons.Award className="w-5 h-5 text-blue-600" /> Why Bikaner Chooses Us Instead of Local Shops?
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 font-medium">
                                <li className="flex items-center gap-2"><Icons.CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" /> Guaranteed 30-Minute Arrival</li>
                                <li className="flex items-center gap-2"><Icons.CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" /> ₹199 Fixed Visiting Charge</li>
                                <li className="flex items-center gap-2"><Icons.CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" /> 30-Day Solid Service Warranty</li>
                                <li className="flex items-center gap-2"><Icons.CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" /> 100% Genuine Spare Parts</li>
                                <li className="flex items-center gap-2"><Icons.CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" /> Background-Verified Pros</li>
                                <li className="flex items-center gap-2"><Icons.CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" /> Serving 500+ Bikaner Wards</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: LSI Keywords & Service Silos */}
                    <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl h-full shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">
                            Most Requested Repairs in Bikaner
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-slate-800 text-base mb-1">Cooling & Air Conditioning (HVAC)</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    Specializing in Split AC repair, Window AC installation, gas refilling, and deep jet cleaning. Highly demanded in Sadul Ganj and Rani Bazar during peak summer. We handle all major brands including LG, Voltas, and Daikin.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-slate-800 text-base mb-1">Electrical Work & Wiring</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    From fixing short circuits and installing fan regulators to complete house rewiring. Our licensed electricians ensure your home meets highest safety standards without overcharging like traditional contractors.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-slate-800 text-base mb-1">Water Purifier & Kitchen Appliances</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    Expert Kent RO service, filter membrane replacement, and TDS level adjustment to ensure your family drinks safe water. We also offer rapid Microwave and Refrigerator (Fridge) defrosting & compressor repairs.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                            <Link href="#services" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors">
                                View Full Service Directory <Icons.ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
