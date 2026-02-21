// src/lib/dynamicEngine.ts

// 1. Seasonal Logic (Major shifts based on weather)
export function getSeasonalPriority() {
    const month = new Date().getMonth(); // 0 = Jan, 11 = Dec
    if (month >= 3 && month <= 8) return 'summer'; // AC/Fridge Priority
    if (month >= 10 || month <= 1) return 'winter'; // Geyser Priority
    return 'normal';
}

// 2. Weekly Seed Generator (Google-Safe Velocity)
export function getWeeklySeed(locationSlug: string) {
    const date = new Date();
    // Get the current week number of the year (1-52)
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    const currentWeek = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);

    const seedString = `${date.getFullYear()}-W${currentWeek}-${locationSlug}`;

    let hash = 0;
    for (let i = 0; i < seedString.length; i++) {
        hash = ((hash << 5) - hash) + seedString.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

// 3. Natural Spintax (No Keyword Stuffing, strict E-E-A-T compliance)
export function getDynamicHeroText(serviceName: string, locationName: string) {
    const seed = getWeeklySeed(locationName);

    const adjectives = ["Top-Rated", "Professional", "Trusted", "Expert"];
    const actions = ["Repair & Service", "Repair Solutions", "Maintenance"];
    const guarantees = ["with 30-Day Warranty", "by Verified Experts", "at Transparent Prices"];

    // Use the weekly seed to pick a natural combination
    const adj = adjectives[seed % adjectives.length];
    const act = actions[(seed + 1) % actions.length];
    const guar = guarantees[(seed + 2) % guarantees.length];

    return `${adj} ${serviceName} ${act} in ${locationName} ${guar}`;
}

// 4. Safe Shuffler for Social Proof & FAQs
export function shuffleArray<T>(array: T[], seed: number): T[] {
    const shuffled = [...array];
    let m = shuffled.length, t, i;
    while (m) {
        i = (seed + m) % m;
        m--;
        t = shuffled[m];
        shuffled[m] = shuffled[i];
        shuffled[i] = t;
        seed += 1;
    }
    return shuffled;
}
