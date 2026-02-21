import Link from "next/link";
import { Phone, Home } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full border border-slate-100">
                <div className="text-6xl mb-4">🚧</div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">We are expanding to this area soon!</h1>
                <p className="text-slate-600 mb-8 text-lg">
                    The page you are looking for isn&apos;t live yet, but our technicians might still be able to help you.
                </p>

                <div className="space-y-4">
                    <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all"
                    >
                        <Phone className="w-5 h-5" />
                        Check Availability: {siteConfig.contact.phone}
                    </a>

                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-3 rounded-xl transition-all"
                    >
                        <Home className="w-5 h-5" />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
