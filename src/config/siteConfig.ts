export const siteConfig = {
  name: "Fix Bikaner",
  shortName: "FixBikaner",
  description: "Bikaner's #1 Home Service Experts",
  url: "https://fixbikaner.com",
  phone: "8946874020", // Aahan
  whatsapp: "https://wa.me/918946874020",
  address: "Bikaner, Rajasthan",
  activeZones: [1, 2], // Only build Core Urban and Core Rural pages
  googleVerification: "",
  googleVerificationCode: "", // Added for backward compatibility
  season: "Summer" as const,

  // DATA RESTORATION FOR LEGACY COMPONENTS
  email: "fixbikaner@gmail.com",
  contact: {
    phone: "8946874020",
    whatsapp: "https://wa.me/918946874020",
    email: "fixbikaner@gmail.com",
    address: "House No. 10, Ward No. 13, Ridmalsar Sipahiyan, Bikaner, Rajasthan 334001",
    publicAddressDisclaimer: "100% Door-to-Door Home Service. No physical storefront - We come to you!",
    businessModel: "Online Service Business",
  },
  pricing: {
    baseVisitCharge: "₹199"
  },
};
