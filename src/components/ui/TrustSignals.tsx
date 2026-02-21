import { Star, ShieldCheck, Clock, BadgeCheck } from "lucide-react";

export function TrustSignals() {
    const items = [
        {
            icon: Star,
            text: "4.8/5 Star Rating",
            subtext: "Based on 500+ Reviews",
            color: "text-yellow-500",
        },
        {
            icon: BadgeCheck,
            text: "Verified Professionals",
            subtext: "Background Checked",
            color: "text-blue-500",
        },
        {
            icon: ShieldCheck,
            text: "30-Day Warranty",
            subtext: "On Service & Parts",
            color: "text-green-500",
        },
        {
            icon: Clock,
            text: "30 Mins Arrival",
            subtext: "Fastest in Bikaner",
            color: "text-purple-500",
        },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
            {items.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <item.icon className={`w-8 h-8 ${item.color} mb-3`} />
                    <div className="font-bold text-slate-800 text-sm md:text-base">{item.text}</div>
                    <div className="text-xs text-slate-500 mt-1">{item.subtext}</div>
                </div>
            ))}
        </div>
    );
}
