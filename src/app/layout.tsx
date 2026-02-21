import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

import { siteConfig } from "@/config/siteConfig";
import { Footer } from "@/components/Footer";
import { DelayedQuotePopup } from "@/components/ui/DelayedQuotePopup";
import { PWAInstallPrompt } from "@/components/ui/PWAInstallPrompt";
import Navbar from "@/components/ui/Navbar";
import { MobileBottomNav } from "@/components/ui/MobileBottomNav";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Crucial for app-like lack of zooming
  userScalable: false, // Prevents zooming on inputs (iOS specific behavior fix)
};

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ["AC Repair Bikaner", "RO Service Bikaner", "Electrician Bikaner", "Home Services Bikaner"],
  authors: [{ name: "Fix Bikaner Team", url: siteConfig.url }],
  creator: "Fix Bikaner",
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/icon-192x192.png", // Ensure icon exists or fallback
    apple: "/icons/icon-192x192.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.name,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "https://www.fixbikaner.in/og-image.jpg", // Recommended size 1200x630
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["https://www.fixbikaner.in/og-image.jpg"],
  },
  verification: {
    google: siteConfig.googleVerificationCode,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth" suppressHydrationWarning>

      <body
        className="font-sans antialiased bg-slate-50 text-slate-900 relative min-h-screen flex flex-col pt-[60px] md:pt-[72px] pb-[96px] md:pb-0 overflow-x-hidden w-full"
        suppressHydrationWarning
      >
        <Script id="register-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js');
              });
            }
          `}
        </Script>

        {/* Global Navigation */}
        <Navbar />

        {/* Global App Area */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* Global Desktop Footer */}
        <div className="hidden md:block">
          <Footer />
        </div>

        <MobileBottomNav />
        <DelayedQuotePopup />
        <PWAInstallPrompt />
      </body>
    </html>
  );
}
