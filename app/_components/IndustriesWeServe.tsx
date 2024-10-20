import React from 'react';
import { Cpu, ShoppingCart, Building2, BookOpen, Activity, Rocket, Building, TrendingUp, LucideIcon } from 'lucide-react';

interface IndustryCardProps {
    icon: LucideIcon;
    title: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon: Icon, title }) => (
    <div className="bg-blue-100/40 px-6 py-12 rounded-lg flex items-center space-x-4">
        <Icon className="text-blue-600" size={32} />
        <span className="text-sm font-medium">{title}</span>
    </div>
);

interface Industry {
    icon: LucideIcon;
    title: string;
}

const IndustriesWeServe: React.FC = () => {
    const industries: Industry[] = [
        { icon: Cpu, title: 'FinTech & Finance' },
        { icon: ShoppingCart, title: 'E-commerce & Fashion' },
        { icon: Building2, title: 'Hospitality & Travel' },
        { icon: BookOpen, title: 'E-learning & Education' },
        { icon: Activity, title: 'Healthcare & Fitness' },
        { icon: Rocket, title: 'Startups B2B & B2C' },
        { icon: Building, title: 'Real Estate' },
        { icon: TrendingUp, title: 'On Demand Solution' },
    ];

    return (
        <div className="container mx-auto py-8">
            <div className='flex flex-col md:flex-row justify-between gap-4 items-center py-16 md:px-4'>
                <h2 className="text-4xl font-bold mb-2">Industries We Serve</h2>
                <p className="text-gray-600 mb-6 md:max-w-[400px] lg:max-w-[800px] md:mr-[-15px] lg:mr-[-80px]">
                    We have a structured work process to ensure that the projects handled can be completed properly and according to your needs.
                </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {industries.map((industry, index) => (
                    <IndustryCard key={index} icon={industry.icon} title={industry.title} />
                ))}
            </div>
        </div>
    );
};

export default IndustriesWeServe;