import Marquee from '@/components/ui/marquee';
import React from 'react';

const roles = [
    "Full Stack Developer",
    "Software Developer",
    "Backend Developer",
    "Product Manager",
    "UI/UX Designer",
    "UI Designer",
    "Flutter Developer",
    "Product Support Engineer"
];

const RoleTag = ({ role }: { role: string }) => (
    <div className="bg-gray-100 text-gray-800 rounded-full px-4 py-2 m-1 text-sm whitespace-nowrap">
        {role}
    </div>
);

export function TalentMarquee() {
    const extendedRoles = [...roles];

    return (
        <div className="bg-white w-full flex flex-col md:flex-row py-4 lg:px-[90px]">
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Get the right talent on board with Techype.
                </h1>
                <p className="text-black mb-6">
                    Find top professionals with experience working in diverse job roles. Techype is your
                    friend in need, helping you hire skilled teams and engineers who excel in different areas of
                    technology.
                </p>
                <button className="bg-gray-900 text-white px-6 py-2 rounded-full self-start">
                    More Insight
                </button>
            </div>
            <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center p-8 md:p-0">
                <div className="h-[200px] md:h-[400px] w-full">
                    <Marquee pauseOnHover vertical className="[--duration:2s] flex h-full">
                        <div className="flex flex-wrap justify-center content-start h-full">
                            {extendedRoles.map((role, index) => (
                                <RoleTag key={index} role={role} />
                            ))}
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    );
}