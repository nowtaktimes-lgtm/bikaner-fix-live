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
        </section>
    );
}
