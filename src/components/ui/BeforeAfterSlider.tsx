"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { GripVertical } from "lucide-react";

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    }, []);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    }, [isDragging, handleMove]);

    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    }, [isDragging, handleMove]);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", () => setIsDragging(false));
            window.addEventListener("touchmove", handleTouchMove, { passive: true });
            window.addEventListener("touchend", () => setIsDragging(false));
        }
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", () => setIsDragging(false));
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", () => setIsDragging(false));
        };
    }, [isDragging, handleMouseMove, handleTouchMove]);

    const styleBlock = `
        .slider-handle-active { left: ${sliderPosition}%; transform: translateX(-50%); }
        .slider-clipped-bg { clip-path: inset(0 ${100 - sliderPosition}% 0 0); }
    `;

    return (
        <div className="w-full max-w-2xl mx-auto mb-8 relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <style dangerouslySetInnerHTML={{ __html: styleBlock }} />
            <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <span className="text-white text-xs font-bold uppercase tracking-wider">Before & After</span>
            </div>

            <div
                ref={containerRef}
                className="relative w-full aspect-video select-none touch-none cursor-ew-resize group"
                onMouseDown={(e) => {
                    setIsDragging(true);
                    handleMove(e.clientX);
                }}
                onTouchStart={(e) => {
                    setIsDragging(true);
                    handleMove(e.touches[0].clientX);
                }}
            >
                {/* After Image (Background) */}
                <div className="absolute inset-0 bg-slate-100 z-0">
                    <Image src={afterImage} alt="After Service" fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
                    <div className="absolute bottom-4 right-4 bg-emerald-500/90 text-white px-3 py-1 text-xs font-bold rounded-full shadow-lg z-10">Clean</div>
                </div>

                {/* Before Image (Foreground/Clipped) */}
                <div
                    className="absolute inset-0 bg-slate-200 z-10 slider-clipped-bg"
                >
                    <Image src={beforeImage} alt="Before Service" fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
                    <div className="absolute bottom-4 left-4 bg-slate-900/80 text-white px-3 py-1 text-xs font-bold rounded-full shadow-lg z-10">Dirty</div>
                </div>

                {/* Slider Handle */}
                <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] slider-handle-active z-20">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-[0_0_15px_rgba(0,0,0,0.3)] flex items-center justify-center border-2 border-slate-200 text-blue-600 transition-transform group-hover:scale-110">
                        <GripVertical className="w-4 h-4" />
                    </div>
                </div>
            </div>

            <div className="bg-slate-50 p-3 text-center border-t border-slate-200">
                <p className="text-sm font-medium text-slate-600">Drag to see our Deep Cleaning result!</p>
            </div>
        </div>
    );
}
