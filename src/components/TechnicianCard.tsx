import { Star, CheckCircle, ShieldCheck } from "lucide-react";
import { TECHNICIAN_NAMES, getStringHash } from "@/lib/utils";

interface TechnicianCardProps {
    locationName: string;
    serviceName?: string;
    name?: string;
    rating?: number;
    jobs?: number;
    specialty?: string;
    image?: string;
}

export function TechnicianCard({ locationName, serviceName = "", name, rating = 4.9, jobs = 1240, specialty = "Senior Technician • 8+ Years Exp", image }: TechnicianCardProps) {
    // Pick name deterministically so it doesn't cause hydration mismatch
    const nameIndex = getStringHash(locationName + serviceName) % TECHNICIAN_NAMES.length;
    const displayName = name || TECHNICIAN_NAMES[nameIndex];
    const displayJobs = jobs + (getStringHash(locationName) % 200); // Add variance to jobs

    return (
        <section className="py-6 md:py-12 bg-slate-50">
            <div className="max-w-md mx-auto px-4 md:px-6">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 relative">
                    <div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] uppercase font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-bl-xl z-20 shadow-sm animate-pulse block">Available Nearby</div>

                    <div className="bg-blue-600 p-3 md:p-4 text-center">
                        <h3 className="text-white font-bold text-base md:text-lg">Your Local Professional</h3>
                    </div>
                    <div className="p-4 md:p-6 text-center">
                        <div className="w-16 h-16 md:w-24 md:h-24 bg-slate-200 rounded-full mx-auto mb-3 md:mb-4 border-2 md:border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                            {image ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img src={image} alt={displayName} className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-3xl md:text-4xl leading-none block pt-1 md:pt-2">👨‍🔧</span>
                            )}
                        </div>

                        <h4 className="text-lg md:text-xl font-bold text-slate-800 mb-0.5 md:mb-1">{displayName}</h4>
                        <p className="text-slate-500 text-xs md:text-sm mb-3 md:mb-4">{specialty}</p>

                        <div className="flex justify-center items-center gap-1 mb-4 md:mb-6">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                            ))}
                            <span className="ml-1.5 md:ml-2 text-slate-700 font-semibold text-sm md:text-base">({rating}) • {displayJobs}+ jobs</span>
                        </div>

                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 md:p-4 mb-4 text-left relative overflow-hidden shadow-inner">
                            <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                            <p className="text-xs md:text-sm text-slate-700 leading-snug md:leading-relaxed font-medium">
                                <span className="font-bold text-amber-700">{displayName}</span> just finished a job in {locationName}. He is available nearby!
                            </p>
                            <p className="text-xs md:text-sm font-bold text-red-600 mt-1.5 md:mt-2 flex items-center gap-1">
                                <span>⏱️</span> Book in next 10 mins to save ₹50.
                            </p>
                        </div>

                        <div className="space-y-2 md:space-y-3 text-left bg-slate-50 p-3 md:p-4 rounded-xl border border-slate-100">
                            <div className="flex items-center gap-2 md:gap-3">
                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                                <span className="text-xs md:text-sm text-slate-700">Vaccinated & Background Verified</span>
                            </div>
                            <div className="flex items-center gap-2 md:gap-3">
                                <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-blue-500 flex-shrink-0" />
                                <span className="text-xs md:text-sm text-slate-700">Carries Original Spare Parts</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
