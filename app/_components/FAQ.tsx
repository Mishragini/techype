"use client"
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
    isOpen?: boolean;
}

const FAQ: React.FC = () => {
    const [faqs, setFaqs] = useState<FAQItem[]>([
        {
            question: "What services are provided by Techype?",
            answer: "Techype is a leading AI software development company that provides many services including mobile application development, AI software development, and MVP Development along with helping companies hire top talents for their long-term and short-term projects.",
            isOpen: false
        },
        {
            question: "Is there any hidden fee in your pricing model?",
            answer: "No hidden fees - we maintain complete transparency in our pricing.",
            isOpen: false
        },
        {
            question: "Does Techype offer any discounts to their clients in case of long-term projects and partnerships?",
            answer: "Yes, we offer special discounts for long-term partnerships and projects.",
            isOpen: false
        },
        {
            question: "Can I track the progress of my project?",
            answer: "Yes, we provide regular updates and a dedicated dashboard to track your project progress.",
            isOpen: false
        },
        {
            question: "What are some industries that you provide your services to?",
            answer: "We serve various industries including healthcare, finance, retail, and technology sectors.",
            isOpen: false
        },
        {
            question: "I need help with developing a mobile app, how can Techype help me?",
            answer: "Our expert team can guide you through the entire mobile app development process, from conception to deployment.",
            isOpen: false
        },
        {
            question: "Is my project idea safe with Techype?",
            answer: "Yes, we sign NDAs and maintain strict confidentiality for all client projects.",
            isOpen: false
        },
        {
            question: "Will Techype develop an app for me that fits my budget?",
            answer: "We offer flexible pricing options and can tailor solutions to match your budget requirements.",
            isOpen: false
        },
        {
            question: "How can I contact Techype if I have any specific questions or queries?",
            answer: "You can reach us through our contact form, email, or phone support.",
            isOpen: false
        }
    ]);

    const toggleFAQ = (index: number) => {
        setFaqs(faqs.map((faq, i) => ({
            ...faq,
            isOpen: i === index ? !faq.isOpen : false
        })));
    };

    return (
        <div className="px-[50px] lg:px-32 bg-blue-100/30 py-12">
            <h1 className="text-3xl font-medium text-center mb-8">Frequently Asked Questions</h1>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border-b border-gray-200 pb-4"
                    >
                        <button
                            className="w-full text-left flex justify-between items-center"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className={`text-lg ${faq.isOpen ? 'text-blue-600' : 'text-gray-700'}`}>
                                {faq.question}
                            </span>
                            <span className="transform transition-transform duration-200">
                                {faq.isOpen ? <ChevronUp /> : <ChevronDown />}
                            </span>
                        </button>

                        {faq.isOpen && (
                            <div className="mt-2 text-gray-600">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;