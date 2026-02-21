"use client";

/**
 * Triggers a short haptic feedback vibration on supported mobile devices.
 * Soft/Light tap simulation.
 */
export const triggerHaptic = () => {
    if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
        // 50ms is standard for a light "tick" feeling
        window.navigator.vibrate(50);
    }
};

/**
 * Triggers a medium haptic feedback vibration.
 */
export const triggerHapticMedium = () => {
    if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(100);
    }
};

/**
 * Triggers a heavy/success haptic feedback pattern.
 * E.g., for form submissions or successful bookings.
 */
export const triggerHapticSuccess = () => {
    if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
        // Two short bursts
        window.navigator.vibrate([50, 100, 50]);
    }
};
