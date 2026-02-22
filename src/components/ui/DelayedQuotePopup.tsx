"use client";

import { useState, useEffect } from "react";
import { LeadForm } from "@/components/forms/LeadForm";

export function DelayedQuotePopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        // Show after 12 seconds once per session (Expert recommended delay for local service sites)
        const timer = setTimeout(() => {
            // We use sessionStorage to make sure it doesn't pop up on every page navigation during the same visit
            const alreadyShown = sessionStorage.getItem("quotePopupShown");

            if (!alreadyShown && !hasShown) {
                setIsOpen(true);
                setHasShown(true);
                sessionStorage.setItem("quotePopupShown", "true");
            }
        }, 12000);

        return () => clearTimeout(timer);
    }, [hasShown]);

    return (
        <LeadForm
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            serviceName="Expert Repair Service"
        />
    );
}
