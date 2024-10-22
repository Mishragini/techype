'use client';

import React, { ReactNode, useEffect } from 'react';
import { useAuth } from "../_components/AuthProvider";
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const { logout, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get('token');
        const userId = Cookies.get('userId');

        if (!token || !userId) {
            router.push('/signin');
        }
    }, [router]);

    if (!user) {
        return null; // or a loading spinner
    }

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
                    <h1 className="text-xl font-semibold">Welcome {user.username}</h1>
                    <button
                        onClick={async () => {
                            await logout();
                            router.push('/signin');
                        }}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Logout
                    </button>
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