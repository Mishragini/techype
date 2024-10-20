import React from 'react';
import { FileText, Users, ArrowUp } from 'lucide-react';

interface ProcessStepProps {
    icon: React.ReactElement;
    title: string;
    description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon, title, description }) => (
    <div className="flex flex-col items-start flex-1 px-4 max-w-sm">
        <div className="bg-[#14142B] p-3 rounded-full mb-4">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
    </div>
);

const ProcessComponent: React.FC = () => {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="mb-12 ">
                <h2 className="text-4xl font-bold mb-1">Our Process!</h2>
                <h3 className="text-4xl font-bold">The Journey of Your Ideas</h3>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-4">
                <div className="hidden md:block w-px h-[300px] lg:h-[220px] bg-transparent border-[1.5px] border-dashed border-gray-700" />

                <ProcessStep
                    icon={<FileText className="w-8 h-8 text-white" />}
                    title="Share requirements"
                    description="How do you wish your product to look like? Share your requirements and trust us to develop a product that goes above and beyond your expectations."
                />
                <div className="hidden md:block w-px h-[300px] lg:h-[220px] bg-transparent border-[1.5px] border-dashed border-gray-700" />
                <ProcessStep
                    icon={<Users className="w-8 h-8 text-white" />}
                    title="Discussing Details"
                    description="As a leading AI software development company, we carefully analyze all your requirements and share an estimate of product timeline and commercial details. Once you approve the collaboration, we ensure to assign the perfect team to develop a perfect product."
                />
                <div className="hidden md:block w-px h-[300px] lg:h-[220px] bg-transparent border-[1.5px] border-dashed border-gray-700" />
                <ProcessStep
                    icon={<ArrowUp className="w-8 h-8 text-white" />}
                    title="Start Building"
                    description="Time to prove to you why we are considered the best AI software development company in the industry, as we bring your ideas to life."
                />
            </div>
        </div>
    );
};

export default ProcessComponent;
