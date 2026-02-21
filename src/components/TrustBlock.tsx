import { Users } from "lucide-react";

interface TrustBlockProps {
    locationName: string;
    nearbyAreas: string[]; // e.g. ["Gangashahar", "Rani Bazar"]
}

// Helper to shuffle based on a seed (location name)
function seededShuffle<T>(array: T[], seed: string): T[] {
    const shuffled = [...array];
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.abs(hash % (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        hash = (hash * 1664525 + 1013904223) % 4294967296; // LCG
    }
    return shuffled;
}

const reviews = [
    { name: "Priya Sharma", text: "Technician arrived on time and fixed my AC in 20 mins. Very professional.", rating: 5 },
    { name: "Rahul Verma", text: "Best service in Bikaner. Charges are reasonable compared to others.", rating: 5 },
    { name: "Amit Bishnoi", text: "Had a cooling issue, sorted quickly. Warranty provided is a plus.", rating: 4 },
    { name: "Suresh Kumar", text: "Good experience. The technician was polite and knowledgeable.", rating: 5 },
    { name: "Anita Devi", text: "Fast and reliable. Will recommend to neighbors.", rating: 5 },
];

export function TrustBlock({ locationName, nearbyAreas }: TrustBlockProps) {
    // Randomize reviews based on location name to avoid "duplicate content" penalty across pages
    // ensuring html structure looks different for bots
    const shuffledReviews = seededShuffle(reviews, locationName).slice(0, 3); // Take top 3

    return (
        <section className="py-12 bg-white border-b border-slate-100">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-slate-50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 border border-slate-100 shadow-sm mb-8">

                    {/* Dynamic Google Map */}
                    <div className="w-full md:w-1/2 aspect-video bg-slate-200 rounded-xl relative overflow-hidden flex items-center justify-center shadow-inner group">
                        <iframe
                            className="absolute inset-0 w-full h-full border-0 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                            src={`https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${encodeURIComponent(locationName + ", Bikaner, Rajasthan")}&t=&z=13&ie=UTF8&iwloc=B&output=embed`}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`Map of ${locationName}, Bikaner`}
                        />
                        {/* Map Overlay Label */}
                        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-800 shadow-lg border border-slate-100 z-10 pointer-events-none flex items-center gap-1.5 transform group-hover:-translate-y-1 transition-transform">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                            </span>
                            {locationName}, Bikaner
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <Users className="w-6 h-6 text-blue-600" />
                            Building Trust in {locationName}
                        </h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            We are proud to serve over <strong>500+ families</strong> in {locationName} and nearby areas like {" "}
                            <span className="text-slate-800 font-medium">{nearbyAreas.join(", ")}</span>.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-3 rounded-lg border border-slate-100 text-center">
                                <div className="text-xl font-bold text-blue-600">4.8/5</div>
                                <div className="text-xs text-slate-500">Local Rating</div>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-slate-100 text-center">
                                <div className="text-xl font-bold text-green-600">30 Min</div>
                                <div className="text-xs text-slate-500">Arrival Time</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Randomized Reviews Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {shuffledReviews.map((review, i) => (
                        <div key={i} className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-sm">
                            <div className="flex items-center gap-1 text-yellow-500 mb-2">
                                {Array(review.rating).fill(0).map((_, k) => (<span key={k}>★</span>))}
                            </div>
                            <p className="text-slate-600 mb-2">&quot;{review.text}&quot;</p>
                            <p className="font-semibold text-slate-800">- {review.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
