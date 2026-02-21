export const sendGAEvent = (eventName: string, params: Record<string, unknown>) => {
    if (typeof window !== "undefined" && "gtag" in window) {
        (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.("event", eventName, params);
    } else {
        console.log(`[GA Event Dev]: ${eventName}`, params);
    }
};
