"use client";
import React, { useState } from 'react';

const CircleArrow = ({ isExpanded }: { isExpanded: boolean }) => (
    <div className={`w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center transition-all duration-200 ${isExpanded ? 'bg-white' : ''
        }`}>
        <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-200 ${isExpanded ? '-rotate-45' : ''}`}
        >
            <path
                d="M5 2L10 7L5 12"
                stroke={isExpanded ? "#0a0a29" : "#ffffff"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </div>
);

const ServicesMenu = () => {
    const [expandedSection, setExpandedSection] = useState<number | null>(null);

    const services = [
        {
            title: 'Generative AI Solutions',
            subItems: ['ChatGPT Integration', 'AI Chatbot', 'Generative AI', 'Predictive Analytics', 'Marketing Assistants', 'Custom AI Models'],
            description: 'Innovative AI Software Solutions that grow your business, fit your budget, and create a lasting impact, all at the same time.'
        },
        {
            title: 'MVP Development',
            subItems: ['Web Platform', 'Mobile App, Branding', 'Designing', 'Scalable Solutions', 'Risk Mitigation'],
            description: 'Build an MVP that effortlessly attracts honest feedback from users and lays the foundation for a life-changing product for your target audience.'
        },
        {
            title: 'SaaS Development',
            subItems: ['Web Platform', 'Mobile App, Branding', 'Designing, API Integration', 'Data Security'],
            description: 'We develop for you SaaS platforms that save your costs and scale your business. Platforms that smoothly adaress all your needs.'
        },
        {
            title: 'Mobile Application Development',
            subItems: ['Frontend', 'Backend', 'UI/UX', 'Branding', 'Android Development', 'iOS Development'],
            description: 'As the best mobile app development company in India, we develop for you apps that set future trends. Join us to build mobile apps that keep your users engaged.'
        },
        {
            title: 'End-to-End Software Development',
            subItems: ['Quality Assurance Testing', 'Post Launch Support', 'Branding', 'Project Management', 'Designing'],
            description: 'Constant and continuous support in developing software that sells. We are your partners right from concept discussion to product launch, we promise to never leave your side.'
        },
        {
            title: 'UI/UX Design',
            subItems: ['Wireframing', 'Prototyping', 'User Research', 'Branding', 'Designing', 'Cross-PLatform Consistency'],
            description: 'We transform your ideas into beautiful UI/UX designs. Designs so beautiful that they make you look twice, bring user engagement & enhance user experience'
        }
    ];

    const handleExpand = (index: number) => {
        setExpandedSection(expandedSection === index ? null : index);
    };

    return (
        <div className="bg-[#0a0a29] text-white py-10 px-32">
            <div className="w-full">
                <div className="mb-8 flex items-center justify-between gap-6">
                    <div className="relative">
                        <div className="absolute -left-36 -top-8 w-[350px] h-[200px] bg-blue-700/30 rounded-full blur-2xl"></div>
                        <div className="relative z-10">
                            <h1 className="text-4xl font-semibold mb-2">Discover</h1>
                            <h2 className="text-4xl font-semibold">Our</h2>
                            <h2 className="text-4xl font-semibold">Services</h2>
                        </div>
                    </div>
                    <div className="text-gray-300 max-w-[500px] text-sm">
                        We Deliver Products that Boost Your Business. When we work, we work with a
                        commitment to deliver products that stand out from the rest. We make sure that your
                        impactful ideas are transformed into even more impactful products
                    </div>
                </div>

                <div className="space-y-4">
                    {services.map((service, index) => (
                        <div key={index} className="border-b border-gray-700">
                            <div
                                className="py-4 flex justify-between items-center cursor-pointer group"
                                onClick={() => handleExpand(index)}
                            >
                                <h3 className="text-xl font-medium">{service.title}</h3>
                                <CircleArrow isExpanded={expandedSection === index} />
                            </div>

                            {expandedSection === index && service.subItems.length > 0 && (
                                <div className="pb-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {service.subItems.map((item, i) => (
                                            <span
                                                key={i}
                                                className="px-4 py-2 bg-gray-800 rounded-full text-sm"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-gray-300 text-sm">{service.description}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesMenu;