export interface FAQ {
    question: string;
    answer: string;
}

export interface Testimonial {
    name: string;
    message: string;
    time: string;
    verified: boolean;
}

export interface Service {
    id: string;
    slug: string;
    name: string;
    shortName: string; // For mobile buttons
    heroTitle: string; // Dynamic H1 template
    metaDescription: string; // SEO template
    keywords: string[]; // LSI keywords
    priceStart: string;
    faqs: FAQ[];
    icon: string; // Lucide icon name
    heroImage: string; // Main background image for the Hero
    beforeImage: string; // "Dirty" image for Slider
    afterImage: string; // "Clean" image for Slider
    testimonials?: Testimonial[];
}

export interface Coordinates {
    lat: number;
    lng: number;
}

export interface Location {
    id: string;
    name: string;
    slug: string;
    zoneId: number;
    pincode: string;
    landmark: string;
    coordinates: Coordinates;
    segment: "Urban" | "Rural";
    isActive?: boolean;
}

export interface SEOData {
    title: string;
    description: string;
    schema: Record<string, unknown>; // JSON-LD object
}

export interface ContentStory {
    introText: string;
    problemText: string;
    whyUsText: string;
}
