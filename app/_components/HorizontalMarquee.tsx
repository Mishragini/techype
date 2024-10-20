import React from 'react';
import { cn } from "@/lib/utils";
import Marquee from '@/components/ui/marquee';

const BrandLogo = ({ name, className }: { name: string; className?: string }) => {
    const logos = {
        "ProjectHero": (
            <div className={cn("flex items-center space-x-2 font-bold", className)}>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600 text-white">
                    PH
                </div>
                <span className="text-gray-800 dark:text-gray-200">projectHERO</span>
            </div>
        ),
        "Simplified": (
            <div className={cn("font-bold tracking-tight", className)}>
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-xl text-transparent">
                    Simplified
                </span>
            </div>
        ),
        "Palo Alto Staffing": (
            <div className={cn("flex flex-col font-serif", className)}>
                <span className="text-lg font-medium text-gray-800 dark:text-gray-200">Palo Alto</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Staffing</span>
            </div>
        ),
        "Prosprr": (
            <div className={cn("font-bold", className)}>
                <span className="text-xl text-emerald-600 dark:text-emerald-400">pros</span>
                <span className="text-xl text-gray-800 dark:text-gray-200">prr</span>
            </div>
        ),
        "Prepins": (
            <div className={cn("flex items-center space-x-1", className)}>
                <div className="h-6 w-6 rounded-full border-2 border-orange-500 bg-orange-100 dark:bg-orange-900"></div>
                <span className="text-lg font-bold text-gray-800 dark:text-gray-200">Prepins</span>
            </div>
        )
    };

    return logos[name as keyof typeof logos] || null;
};

const brands = [
    { name: "ProjectHero" },
    { name: "Simplified" },
    { name: "Palo Alto Staffing" },
    { name: "Prosprr" },
    { name: "Prepins" }
];

const firstRow = brands.slice(0, Math.ceil(brands.length / 2));

const BrandCard = ({ name }: { name: string }) => {
    return (
        <div
            className={cn(
                "relative mx-4 w-48 cursor-pointer overflow-hidden rounded-xl p-6",
                "bg-white hover:bg-gray-50",
                "dark:bg-gray-800/50 dark:hover:bg-gray-700/50",
                "transition-colors duration-200"
            )}
        >
            <div className="flex h-20 items-center justify-center">
                <BrandLogo name={name} />
            </div>
        </div>
    );
};

export default function BrandShowcase() {
    return (
        <div className="flex flex-col items-center gap-8 py-16">
            <h2 className="text-center text-xl font-medium text-gray-500 dark:text-white">
                Trusted by leading brands and startups
            </h2>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
                <Marquee pauseOnHover className="[--duration:30s]">
                    {firstRow.map((brand) => (
                        <BrandCard key={brand.name} {...brand} />
                    ))}
                </Marquee>

                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            </div>
        </div >
    );
}