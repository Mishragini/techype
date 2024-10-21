import React, { ReactNode } from 'react';
import SignOutButton from '../_components/SignOutButton';

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Left Sidebar */}
            <div className="w-64 bg-white shadow-md">
                <div className="p-4">
                    <h2 className="text-xl font-semibold">Dashboard</h2>
                </div>
                <nav className="mt-4">
                    <ul>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Home</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Analytics</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Settings</li>
                    </ul>
                </nav>
            </div>

            <div className="flex flex-col flex-1">
                {/* Top Bar */}
                <header className="bg-white shadow-md h-16 flex items-center justify-between px-6">
                    <h1 className="text-xl font-semibold">Welcome, User</h1>
                    <SignOutButton />
                </header>

                {/* Main Content */}
                <main className="flex-1 p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;