// HeroSectionTwo.tsx
import React from 'react';

const HeroSectionTwo = () => {
    return (
        <div className="relative  w-full bg-[#0A0A1B] overflow-hidden py-16">
            <div className="absolute right-0 top-0 w-1/2 h-full">
                <div className="absolute right-0 top-0 w-full h-full transform translate-x-1/4 translate-y-1/4">
                    <div className="w-full h-full bg-blue-700/20 blur-3xl rounded-full"></div>
                </div>
            </div>

            <div className="relative z-10 max-w-6xl pl-40">
                <div>
                    <h1 className="text-4xl  font-bold text-white mb-6">
                        Accelerate your idea.
                    </h1>
                    <p className="text-normal text-gray-300 mb-8">
                        You are just one click away from your dream app. Turn your idea into a new tech revolution.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-200">
                        Get started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSectionTwo;