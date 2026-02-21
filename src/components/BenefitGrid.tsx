import { ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export default function BenefitGrid() {
    const benefits = [
        {
            icon: <Clock className="w-10 h-10 text-orange-500" />,
            title: "30 Mins Arrival",
            desc: "Our tech reaches you before your pizza does."
        },
        {
            icon: <CheckCircle2 className="w-10 h-10 text-green-500" />,
            title: "Verified Pros",
            desc: "Background checked & skill tested technicians."
        },
        {
            icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
            title: "30 Day Warranty",
            desc: "If it breaks again, we fix it for free."
        }
    ];

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, idx) => (
                    <div key={idx} className="bg-white border border-slate-200 p-8 rounded-3xl flex flex-col items-center text-center hover:border-blue-200 hover:shadow-lg transition-all shadow-sm">
                        <div className="mb-6 p-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                            {benefit.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                        <p className="text-slate-600">{benefit.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
