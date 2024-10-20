import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 px-4 lg:px-32">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Techype Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Techype</h2>
                    <p className="text-sm">
                        Techype was built with all types of businesses & entrepreneurs in mind. Contact us with your requirements using this form for more.
                    </p>
                </div>

                {/* Company Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Company</h2>
                    <ul className="space-y-2 text-sm">
                        {['Portfolio', 'About Us', 'Contact us', 'Career', 'Blogs', 'Terms & Condition', 'Privacy Policy'].map((item) => (
                            <li key={item}>
                                <a href="#" className="hover:text-white transition-colors">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Expertise Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Expertise</h2>
                    <ul className="space-y-2 text-sm">
                        {['Generative-AI-development', 'MVP-development', 'Mobile App Development', 'SaaS Development', 'Custom Software Development', 'UI/UX design', 'Hybrid Teams'].map((item) => (
                            <li key={item}>
                                <a href="#" className="hover:text-white transition-colors">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Us Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Contact us</h2>
                    <div className="space-y-4 text-sm">
                        <p className="flex items-center">
                            <Phone size={16} className="mr-2" /> +919289034933
                        </p>
                        <p className="flex items-center">
                            <Mail size={16} className="mr-2" /> business@techype.in
                        </p>
                        <div>
                            <h3 className="font-semibold mb-1">India Office</h3>
                            <p className="flex items-start">
                                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                                Plot no. 100C, Sector 4, Vaishali Ghaziabad, uttar pardesh 201012
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">USA Office</h3>
                            <p className="flex items-start">
                                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                                440 N Barranca Ave #7914, Covina, CA 91723, USA
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright and Social Icons */}
            <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm mb-4 md:mb-0">&copy; Techype Technology Ltd 2024-present. All Rights Reserved</p>
                <div className="flex space-x-4">
                    {['facebook', 'linkedin', 'twitter', 'instagram'].map((social) => (
                        <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                            <span className="sr-only">{social}</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;