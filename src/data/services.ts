import { Service } from "@/types";

export const services: Service[] = [
    {
        id: "ac-repair",
        slug: "ac-repair-service",
        name: "AC Repair & Service",
        shortName: "AC Repair",
        heroTitle: "Fastest AC Repair in {location}",
        metaDescription:
            "Best AC Repair in {location} with 30-day warranty. Technician arrives in 30 mins near {landmark}. Split & Window AC servicing starting at ₹199.",
        keywords: [
            "Split AC Gas Filling",
            "Window AC Service",
            "AC PCB Repair",
            "AC Installation Bikaner",
            "AC Jet Cleaning",
        ],
        priceStart: "₹199",
        faqs: [
            {
                question: "Why is my AC not cooling?",
                answer:
                    "Common reasons include gas leakage, dirty filters, or compressor issues. Our Bikaner technicians can diagnose this in 15 mins.",
            },
            {
                question: "Do you provide a warranty on AC repair?",
                answer:
                    "Yes, we provide a 30-day service warranty on all AC repairs and part replacements in Bikaner.",
            },
            {
                question: "How much does AC gas filling cost?",
                answer:
                    "AC Gas filling starts from ₹800 depending on the gas type (R32, R410, R22) and AC tonnage.",
            },
        ],
        icon: "AirVent",
        heroImage: "https://bikaneracservice.com/wp-content/uploads/2026/01/urban-fix-ac-repair-technician-bikaner-rajasthani-style-scaled-1-scaled.webp",
        beforeImage: "https://bikaneracservice.com/wp-content/uploads/2026/01/dirty-split-ac-air-filter-cooling-problem.webp",
        afterImage: "https://bikaneracservice.com/wp-content/uploads/2026/01/professional-split-ac-repair-technician-bikaner.webp",
        testimonials: [
            { name: "Rajesh Ji (JNV Colony)", message: "Bhaiya AC ekdum badhiya chal raha hai ab. Cooling fast ho gayi. Thanks!", time: "2:30 PM", verified: true },
            { name: "Amit Gupta (Gangashahar)", message: "Late night service ke liye shukriya. Bikaner me proper professional kaam aap hi karte ho.", time: "10:15 AM", verified: true },
            { name: "Suman Devi (Rani Bazar)", message: "Price was reasonable. Technician polite tha aur gandagi bhi saaf karke gaya.", time: "6:45 PM", verified: true },
        ],
    },
    {
        id: "ro-service",
        slug: "ro-service-repair",
        name: "RO Water Purifier Service",
        shortName: "RO Service",
        heroTitle: "Expert RO Repair in {location}",
        metaDescription:
            "Genuine RO Service in {location}. Filter change, membrane replacement & repair near {landmark}. 100% pure water guaranteed.",
        keywords: [
            "RO Filter Change",
            "RO Membrane Replacement",
            "Water Purifier Repair",
            "Kent RO Service",
            "Aquaguard Service Bikaner",
        ],
        priceStart: "₹149",
        faqs: [
            {
                question: "How often should I change my RO filters?",
                answer:
                    "Sediment and Carbon filters should be changed every 6-8 months, and the RO membrane every 1.5-2 years depending on Bikaner's water TDS.",
            },
            // ... more FAQs can be added
        ],
        icon: "Droplets",
        heroImage: "https://bikaneracservice.com/wp-content/uploads/2025/11/ChatGPT-Image-Nov-8-2025-11_28_28-AM.webp",
        beforeImage: "https://bikaneracservice.com/wp-content/uploads/2025/11/ChatGPT-Image-Nov-8-2025-11_28_28-AM.webp",
        afterImage: "https://bikaneracservice.com/wp-content/uploads/2025/11/ChatGPT-Image-Nov-8-2025-11_28_28-AM.webp",
        testimonials: [
            { name: "Vikram Singh (Sadul Ganj)", message: "RO filter change ho gaya, taste acha hai paani ka ab. Recommended!", time: "1:20 PM", verified: true },
            { name: "Pooja Verma (Gopeshwar Basti)", message: "Quick response time. 30 min me aa gaye jaisa bola tha.", time: "4:10 PM", verified: true },
            { name: "Naresh Tiwari (Pawanpuri)", message: "Bhai sahab TDS sahi se set karke gaye. Purana wala pump bhi saste me repair kar diya. A1 service.", time: "12:05 PM", verified: true },
        ]
    },
    {
        id: "washing-machine",
        slug: "washing-machine-repair",
        name: "Washing Machine Repair",
        shortName: "Washing Machine",
        heroTitle: "Quick Washing Machine Repair in {location}",
        metaDescription:
            "Top-rated Washing Machine Repair in {location} near {landmark}. Front load, Top load & Semi-automatic repair by expert mechanics.",
        keywords: [
            "Samsung Washing Machine Repair",
            "LG Washing Machine Service",
            "Washing Machine Drum Cleaning",
            "Fully Automatic Repair",
        ],
        priceStart: "₹249",
        faqs: [
            {
                question: "Why is my washing machine making noise?",
                answer:
                    "Noise issues are often due to a loose drum, worn-out bearings, or something stuck in the tub. We can fix this at your home.",
            },
        ],
        icon: "Waves",
        heroImage: "https://bikaneracservice.com/wp-content/uploads/2025/11/ChatGPT-Image-Nov-8-2025-10_29_27-AM.webp",
        beforeImage: "https://bikaneracservice.com/wp-content/uploads/2025/11/ChatGPT-Image-Nov-8-2025-10_29_27-AM.webp",
        afterImage: "https://bikaneracservice.com/wp-content/uploads/2025/11/ChatGPT-Image-Nov-8-2025-10_29_27-AM.webp",
        testimonials: [
            { name: "Sunita (Sardul Colony)", message: "Machine spin nahi kar rahi thi. Bhaiya ne aake motor fix kar di. Ab badhiya chal rahi.", time: "3:45 PM", verified: true },
            { name: "Kapil Sharma (Bichhwal)", message: "Company service wale 2 din maang rahe the, Fix Bikaner ne 1 ghante me aake board repair kar diya. Solid kaam!", time: "11:30 AM", verified: true },
            { name: "Ramesh Ji (Mukta Prasad)", message: "Kaam pura clear aur saaf tha. Rate bhi theek the.", time: "7:15 PM", verified: true },
        ]
    },
    {
        id: "geyser-repair",
        slug: "geyser-heater-repair",
        name: "Geyser & Heater Repair",
        shortName: "Geyser Repair",
        heroTitle: "Instant Geyser Repair in {location}",
        metaDescription:
            "Safe & Fast Geyser Repair in {location}. Heating element change, thermostat repair near {landmark}. Available for Gas & Electric Geysers.",
        keywords: [
            "Electric Geyser Repair",
            "Gas Geyser Service",
            "Geyser Not Heating",
            "Water Heater Installation",
        ],
        priceStart: "₹249",
        faqs: [
            {
                question: "Is it safe to repair a gas geyser?",
                answer:
                    "Gas geysers require expert handling due to safety risks. Our technicians are trained to handle gas leakage and burner issues safely.",
            },
        ],
        icon: "ThermometerSun",
        heroImage: "https://bikaneracservice.com/wp-content/uploads/2025/11/ChatGPT-Image-Nov-8-2025-10_58_44-AM.webp",
        beforeImage: "https://bikaneracservice.com/wp-content/uploads/2025/11/ChatGPT-Image-Nov-8-2025-10_58_44-AM.webp",
        afterImage: "https://bikaneracservice.com/wp-content/uploads/2025/11/ChatGPT-Image-Nov-8-2025-10_58_44-AM.webp",
        testimonials: [
            { name: "Kuldeep (Tilak Nagar)", message: "Sardiyon me geyser band ho gaya tha. Emergency me raat ko 8 baje aaye, heater coil badal di. Life saver!", time: "9:00 PM", verified: true },
            { name: "Bhawna (Civil Lines)", message: "Gas geyser me leakage thhi, dar lag raha tha. Technician ne aake safely theek kar diya.", time: "2:10 PM", verified: true },
            { name: "Rohan (Naya Shahar)", message: "Fastest service in Bikaner hands down. Apne tools leke aaye aur 20 min me free.", time: "11:45 AM", verified: true },
        ]
    },
    {
        id: "electrician",
        slug: "electrician-service",
        name: "Expert Electrician",
        shortName: "Electrician",
        heroTitle: "Professional Electrician in {location}",
        metaDescription:
            "Need an Electrician in {location}? Fast arrival near {landmark} for fan repair, wiring, switchboard installation, and more.",
        keywords: [
            "Electrician near me",
            "Fan regulator change",
            "MCB trip problem",
            "Inverter connection",
        ],
        priceStart: "₹99",
        faqs: [
            {
                question: "Do you do checking for short circuits?",
                answer:
                    "Yes, we use advanced tools to detect and fix hidden short circuits in your home wiring.",
            },
        ],
        icon: "Zap",
        heroImage: "https://bikaneracservice.com/wp-content/uploads/2025/11/urban-fix-bikaner-electrical-service-professional-electricians.webp",
        beforeImage: "https://bikaneracservice.com/wp-content/uploads/2025/11/urban-fix-bikaner-electrical-service-professional-electricians.webp",
        afterImage: "https://bikaneracservice.com/wp-content/uploads/2025/11/urban-fix-bikaner-electrical-service-professional-electricians.webp",
        testimonials: [
            { name: "Pramod Ji (Karni Nagar)", message: "MCB bar bar trip ho rahi thi, problem dhundne me time lag gaya par permanently theek kar diya. Excellent.", time: "4:20 PM", verified: true },
            { name: "Neha (JNV Colony)", message: "New switchboard aur fan lagwana tha, bhaiya ne deewar bhi gandi nahi kari kaam karke.", time: "1:15 PM", verified: true },
            { name: "Ashok (Purani Abadi)", message: "Inverter inverter ki wiring ulti thi pahle, unhone sahi ki. Badhiya samajh hai inhe kaam ki.", time: "6:30 PM", verified: true },
        ]
    },
    {
        id: "cctv-dealer-installer",
        slug: "cctv-installation-dealer",
        name: "CCTV Installation & Dealer",
        shortName: "CCTV Cameras",
        heroTitle: "Top CCTV Dealer & Installation in {location}",
        metaDescription:
            "Best CCTV dealer and installation service in {location}. Secure your home/business near {landmark} with CP Plus, Hikvision, and more. Expert CCTV repair available.",
        keywords: [
            "CCTV Installation Bikaner",
            "CCTV Dealer near me",
            "CP Plus Camera Installation",
            "Hikvision Dealer Bikaner",
            "CCTV Repair Service",
            "Security Camera Setup",
        ],
        priceStart: "₹499",
        faqs: [
            {
                question: "Which brand of CCTV cameras do you sell and install?",
                answer:
                    "We deal in and install top brands like CP Plus, Hikvision, and Dahua, providing both IP and Analog camera solutions tailored to your security needs in Bikaner.",
            },
            {
                question: "Do you provide CCTV repair services as well?",
                answer:
                    "Yes, apart from new installations, our technicians can repair DVRs, fix camera wiring issues, and resolve 'no signal' errors.",
            },
            {
                question: "Is there any warranty on the camera installation?",
                answer:
                    "Yes, we provide official brand warranties on the cameras and our own service warranty on the installation and wiring work.",
            },
        ],
        icon: "Camera",
        heroImage: "https://bikaneracservice.com/wp-content/uploads/2025/11/ChatGPT-Image-Nov-8-2025-11_40_42-AM.webp",
        beforeImage: "https://bikaneracservice.com/wp-content/uploads/2025/11/ChatGPT-Image-Nov-8-2025-11_40_42-AM.webp",
        afterImage: "https://bikaneracservice.com/wp-content/uploads/2025/11/ChatGPT-Image-Nov-8-2025-11_40_42-AM.webp",
        testimonials: [
            { name: "Manish (Bada Bazar)", message: "Dukaan pe 4 Hikvision ke camera lagwaye. Wiring ekdum clear aur mobile app pe setup karke diya. Professional log hain.", time: "5:30 PM", verified: true },
            { name: "Anand Singh (Gangashahar)", message: "Raat ki recording me problem aa rahi thi DVR me. Bhaiya ne aake setting theek ki. Ab sab clear hai.", time: "10:20 AM", verified: true },
            { name: "Kiran (Sardul Ganj)", message: "Ghar ke bahar security camera lagwaya. Quality mast hai aur bhaiya ne price bhi sahi lagaya.", time: "2:45 PM", verified: true },
        ]
    },
];
