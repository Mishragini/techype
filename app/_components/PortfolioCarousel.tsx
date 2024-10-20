"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const projects = [
    {
        name: 'RGwellness',
        tags: ['UI/UX Design', 'App Design', 'Landing Page Design', 'App Development'],
        description: 'Techype handles all HR matters. From onboarding to day-to-day employee management.',
        image: '/portfolio.svg'
    },
    {
        name: 'Simplified',
        tags: ['Mobile App', 'Backend Development'],
        description: 'A description for project Simplified. This is where the project details go.',
        image: '/portfolio.svg'
    },
    {
        name: 'Project Hero',
        tags: ['UI/UX Design', 'Web Development'],
        description: 'A description for project Hero. This is where the project details go.',
        image: '/portfolio.svg'
    },
];

const PortfolioCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-[140px] py-12 ">
            <h2 className="text-4xl font-bold mb-8">
                Our Recent<br />Work Portfolio
            </h2>

            <div className="bg-[#1C1C28] rounded-xl overflow-hidden relative">
                <div className="flex flex-col lg:flex-row h-full">
                    {/* Left side */}
                    <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="bg-[#00B884] text-white w-8 h-8 flex items-center justify-center rounded text-sm font-medium">
                                RG
                            </div>
                            <span className="text-white text-xl font-medium">
                                {projects[currentSlide].name}
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {projects[currentSlide].tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-white text-black text-sm px-4 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-white">
                            {projects[currentSlide].description}
                        </p>
                    </div>

                    <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-[400px] m-10">
                        <Image
                            src={projects[currentSlide].image}
                            alt="Project screenshot"
                            fill
                            className=""
                        />
                    </div>
                </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center space-x-2 mt-6">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-blue-600 w-4' : 'bg-gray-400'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default PortfolioCarousel;