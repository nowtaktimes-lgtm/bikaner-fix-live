import { Service, Location } from "@/types";

interface ContentStory {
    introText: string;
    problemText: string;
    whyUsText: string;
}

export const generateLocalStory = (service: Service, location: Location): ContentStory => {
    // Create deterministic pseudo-random hashes based on location name and length
    const hash1 = location.name.length;
    const hash2 = location.name.charCodeAt(0) || 0;
    const hash3 = location.name.charCodeAt(location.name.length - 1) || 0;

    const intros = [
        `Welcome to Fix Bikaner's premier ${service.name} services specifically serving ${location.name}. `,
        `Looking for top-rated ${service.name} experts near ${location.name}? You're in the right place. `,
        `Get fast and reliable ${service.name} directly at your doorstep in ${location.name}. `
    ];

    const problems = [
        `Facing issues with your ${service.shortName}? A malfunctioning appliance can disrupt your entire routine. `,
        `When your ${service.shortName} breaks down unexpectedly in the middle of the day, it's a major headache. `,
        `Delaying repairs for your ${service.shortName} can often lead to more expensive damage down the line. `
    ];

    const whyUsStarts = [
        `We are the preferred choice for ${location.name} residents because `,
        `Locals in ${location.name} continually trust our platform because `,
        `Our technicians are consistently highly rated across ${location.name} simply because `
    ];

    let intro = intros[hash1 % intros.length];
    let problem = problems[hash2 % problems.length];
    let whyUs = whyUsStarts[hash3 % whyUsStarts.length];

    // 1. Segment Based Logic (Urban vs Rural)
    if (location.segment === "Rural") {
        const ruralIntros = [
            `We understand that finding reliable technicians in outer areas like ${location.name} can be difficult, which is why our mobile units specialize in remote locations. `,
            `Don't worry about being far from the city center. We dispatch fully equipped remote repair units directly to ${location.name}. `
        ];
        intro += ruralIntros[hash2 % ruralIntros.length];

        problem += `Dust storms and voltage fluctuations common in village areas can severely damage appliances. `;
        whyUs += `we arrive fully prepared with extra spare parts, ensuring we don't have to return to the city for small components. `;
    } else {
        const urbanIntros = [
            `Living in the busy streets of ${location.name}? We offer quick, disruption-free service designed for modern homes. `,
            `Whether you have a high-rise apartment or an independent house near ${location.landmark}, our team is ready. `
        ];
        intro += urbanIntros[hash1 % urbanIntros.length];

        problem += `Tight schedules mean you need repairs that fit into your busy day perfectly. `;
        whyUs += `our technicians are stationed near ${location.landmark} to ensure a lightning-fast 30-minute arrival time, skipping city traffic delays. `;
    }

    // 2. Service Specific Logic overrides/additions
    if (service.id === "ro-service" || service.slug.includes("ro-")) {
        if (location.segment === "Rural") {
            problem += `The groundwater in ${location.name} often has high TDS levels, which chokes normal filters quickly. `;
            whyUs += `We use heavy-duty membranes specifically designed for high-TDS water found in Bikaner's outskirts.`;
        } else {
            problem += `Municipal water supply in ${location.name} can sometimes bring unexpected sediments. `;
            whyUs += `We provide multi-stage filtration checks to ensure your family drinks 100% pure water.`;
        }
    }

    if (service.id === "ac-repair" || service.slug.includes("ac-")) {
        if (location.segment === "Rural") {
            intro += `Beat the extreme heat in ${location.name} with our specialized heavy-duty cooling solutions. `;
        } else {
            intro += `Stay cool in your ${location.name} home/office with our silent and efficient AC servicing. `;
        }
    }

    return {
        introText: intro.trim(),
        problemText: problem.trim(),
        whyUsText: whyUs.trim(),
    };
};
