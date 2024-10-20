"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialCarousel = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const AUTO_SLIDE_INTERVAL = 5000;
    const [screenSize, setScreenSize] = useState('large');

    const testimonials = [
        {
            id: 1,
            name: 'Ansh Gupta',
            company: 'Dolphin Solutions',
            image: '/api/placeholder/48/48',
            text: 'Techype seamlessly integrated with ours, bringing a wealth of expertise and efficiency to the table.'
        },
        {
            id: 2,
            name: 'Shruti Mishra',
            company: 'Dolphin Solutions',
            image: '/api/placeholder/48/48',
            text: 'Techype seamlessly integrated with ours, bringing a wealth of expertise and efficiency to the table.'
        },
        {
            id: 3,
            name: 'Anil Sharma',
            company: 'Dolphin Solutions',
            image: '/api/placeholder/48/48',
            text: 'Techype seamlessly integrated with ours, bringing a wealth of expertise and efficiency to the table.'
        },
        {
            id: 4,
            name: 'Ansh Gupta',
            company: 'Dolphin Solutions',
            image: '/api/placeholder/48/48',
            text: 'Techype seamlessly integrated with ours, bringing a wealth of expertise and efficiency to the table.'
        },
        {
            id: 5,
            name: 'Shruti Mishra',
            company: 'Dolphin Solutions',
            image: '/api/placeholder/48/48',
            text: 'Techype seamlessly integrated with ours, bringing a wealth of expertise and efficiency to the table.'
        },
        {
            id: 6,
            name: 'Anil Sharma',
            company: 'Dolphin Solutions',
            image: '/api/placeholder/48/48',
            text: 'Techype seamlessly integrated with ours, bringing a wealth of expertise and efficiency to the table.'
        },
        {
            id: 7,
            name: 'Ansh Gupta',
            company: 'Dolphin Solutions',
            image: '/api/placeholder/48/48',
            text: 'Techype seamlessly integrated with ours, bringing a wealth of expertise and efficiency to the table.'
        },
        {
            id: 8,
            name: 'Shruti Mishra',
            company: 'Dolphin Solutions',
            image: '/api/placeholder/48/48',
            text: 'Techype seamlessly integrated with ours, bringing a wealth of expertise and efficiency to the table.'
        },
        {
            id: 9,
            name: 'Anil Sharma',
            company: 'Dolphin Solutions',
            image: '/api/placeholder/48/48',
            text: 'Techype seamlessly integrated with ours, bringing a wealth of expertise and efficiency to the table.'
        },
        {
            id: 10,
            name: 'Ansh Gupta',
            company: 'Dolphin Solutions',
            image: '/api/placeholder/48/48',
            text: 'Techype seamlessly integrated with ours, bringing a wealth of expertise and efficiency to the table.'
        },
        {
            id: 11,
            name: 'Shruti Mishra',
            company: 'Dolphin Solutions',
            image: '/api/placeholder/48/48',
            text: 'Techype seamlessly integrated with ours, bringing a wealth of expertise and efficiency to the table.'
        },
        {
            id: 12,
            name: 'Anil Sharma',
            company: 'Dolphin Solutions',
            image: '/api/placeholder/48/48',
            text: 'Techype seamlessly integrated with ours, bringing a wealth of expertise and efficiency to the table.'
        }
    ];


    // Screen size detection
    useEffect(() => {
        const checkScreenSize = () => {
            if (window.innerWidth < 768) {
                setScreenSize('small');
            } else if (window.innerWidth <= 1024) {
                setScreenSize('medium');
            } else {
                setScreenSize('large');
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Calculate slides per page based on screen size
    const getSlidesPerPage = () => {
        switch (screenSize) {
            case 'small':
                return 1;
            case 'medium':
                return 2;
            default:
                return 3;
        }
    };

    const slidesPerPage = getSlidesPerPage();
    const totalPages = Math.ceil(testimonials.length / slidesPerPage);

    // Reset current page when screen size changes to prevent empty slides
    useEffect(() => {
        setCurrentPage(0);
    }, [screenSize]);

    // Auto-slide functionality
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentPage((prev) => (prev + 1) % totalPages);
        }, AUTO_SLIDE_INTERVAL);

        return () => clearInterval(timer);
    }, [totalPages]);

    const getCurrentTestimonials = () => {
        const startIndex = currentPage * slidesPerPage;
        return testimonials.slice(startIndex, startIndex + slidesPerPage);
    };

    return (
        <div className="w-full lg:px-32 px-[50px] py-16">
            {/* Header Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div>
                    <h2 className="text-4xl font-bold text-left">
                        Prioritizing client
                        <br />
                        satisfaction always.
                    </h2>
                </div>
                <div>
                    <p className="text-gray-600 text-base">
                        We believe in your dreams and your visions as much as we believe in our own. Our honesty is reflected in the work that we do and the products that we deliver.
                    </p>
                </div>
            </div>

            {/* Carousel Container */}
            <div className="relative">
                {/* Testimonials Section */}
                <div className="overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPage}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {getCurrentTestimonials().map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="bg-blue-50 rounded-lg p-8"
                                >
                                    {/* Company Logo */}
                                    <div className="mb-6">
                                        <img
                                            src="/api/placeholder/48/48"
                                            alt="Dolphin Solutions"
                                            className="h-8"
                                        />
                                    </div>

                                    {/* Testimonial Text */}
                                    <p className="text-gray-700 mb-8">
                                        {testimonial.text}
                                    </p>

                                    {/* Profile Section */}
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div>
                                            <h4 className="font-medium text-blue-600">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                {testimonial.company}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Carousel Dots */}
                <div className="flex justify-center gap-2 mt-10">
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentPage
                                ? 'w-6 bg-blue-600'
                                : 'w-2 bg-gray-300'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialCarousel;