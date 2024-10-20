"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Code, ChevronDown, Menu, X } from 'lucide-react';

const AppBar = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleServices = () => setIsServicesOpen(!isServicesOpen);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const services = [
        { name: 'Generative AI Solutions', href: '/services/generative-ai', icon: '🧠' },
        { name: 'MVP Development', href: '/services/mvp-development', icon: '🚀' },
        { name: 'SaaS Development', href: '/services/saas-development', icon: '☁️' },
        { name: 'Mobile Application Development', href: '/services/mobile-app', icon: '📱' },
        { name: 'End-to-End Software Development', href: '/services/software-development', icon: '💻' },
        { name: 'UI/UX Design', href: '/services/ui-ux-design', icon: '🎨' },
        { name: 'Hybrid Teams/Engineers', href: '/services/hybrid-teams', icon: '👥' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
            <div className="container mx-auto px-4 py-1">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center">
                        <div className='bg-black p-1 rounded'>
                            <Code className="h-6 w-6 text-white" />
                        </div>
                        <span className="ml-2 text-xl font-semibold text-gray-900">Techype</span>
                    </Link>
                    <div className="flex items-center">
                        <nav className="hidden lg:flex items-center space-x-6">
                            <div className="relative group">
                                <button
                                    onClick={toggleServices}
                                    className="flex items-center text-black hover:text-indigo-500"
                                >
                                    Services
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </button>
                                {isServicesOpen && (
                                    <div className="absolute left-0 mt-2 w-[700px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="py-1 grid grid-cols-2 gap-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            {services.map((service) => (
                                                <Link
                                                    key={service.name}
                                                    href={service.href}
                                                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                                                    role="menuitem"
                                                >
                                                    <span className="mr-2">{service.icon}</span>
                                                    {service.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <Link href="/hire-engineers" className="text-black hover:text-indigo-500">Hire engineers</Link>
                            <Link href="/portfolio" className="text-black hover:text-indigo-500">Portfolio</Link>
                            <Link href="/careers" className="text-black hover:text-indigo-500">Careers</Link>
                            <Link href="/about-us" className="text-black hover:text-indigo-500">About us</Link>
                            <Link href="/blog" className="text-black hover:text-indigo-500">Blog</Link>
                        </nav>
                        <Link href="/contact" className="hidden lg:inline-block bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300 ml-6">
                            Contact Us
                        </Link>
                        <div className="lg:hidden">
                            <button onClick={toggleMobileMenu} className="text-gray-900 ml-6">
                                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-md max-h-[25vh] overflow-y-auto">
                    <div className="px-6 pb-6">
                        <div className="relative">
                            <button
                                onClick={toggleServices}
                                className="text-left text-sm font-normal text-black-700 hover:text-indigo-500 hover:bg-gray-50 flex items-center justify-between py-1"
                            >
                                Services
                                <ChevronDown className="h-4 w-4" />
                            </button>
                            {isServicesOpen && (
                                <div className="pl-4 mt-2">
                                    {services.map((service) => (
                                        <Link
                                            key={service.name}
                                            href={service.href}
                                            className="block py-2 text-sm text-gray-700 hover:bg-gray-50"
                                        >
                                            <span className="mr-2">{service.icon}</span>
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                        <Link href="/hire-engineers" className="block py-1 text-sm font-normal text-black hover:text-indigo-500 hover:bg-gray-50">Hire engineers</Link>
                        <Link href="/portfolio" className="block py-1 text-sm font-normal text-black hover:text-indigo-500 hover:bg-gray-50">Portfolio</Link>
                        <Link href="/careers" className="block py-1 text-sm font-normal text-black hover:text-indigo-500 hover:bg-gray-50">Careers</Link>
                        <Link href="/about-us" className="block py-1 text-sm font-normal text-black hover:text-indigo-500 hover:bg-gray-50">About us</Link>
                        <Link href="/blog" className="block py-1 text-sm font-normal text-black hover:text-indigo-500 hover:bg-gray-50">Blog</Link>
                        <Link href="/contact" className="inline-block bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300 mt-1 text-sm">Contact Us</Link>
                    </div>
                </div>
            )}


        </header>
    );
};

export default AppBar;