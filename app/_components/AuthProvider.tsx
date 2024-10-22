'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '@/types/auth';
import Cookies from 'js-cookie';

interface AuthContextType {
    user: User | null;
    login: (token: string, userData: User) => void;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Check for user data in cookies on mount
        const userData = Cookies.get('userData');
        if (userData) {
            try {
                setUser(JSON.parse(userData));
            } catch (e) {
                console.error('Error parsing user data from cookie:', e);
            }
        }
    }, []);

    const login = (token: string, userData: User) => {
        Cookies.set('token', token, {
            secure: true,
            sameSite: 'strict',
            expires: 7 // expires in 7 days
        });

        Cookies.set('userId', userData.id, {
            secure: true,
            sameSite: 'strict',
            expires: 7
        });

        Cookies.set('userData', JSON.stringify(userData), {
            secure: true,
            sameSite: 'strict',
            expires: 7
        });

        setUser(userData);
    };

    const logout = async () => {
        try {
            const userId = Cookies.get('userId');
            await fetch('http://localhost:4000/users/logout', {
                method: 'POST',
                headers: {
                    'userid': userId || '',
                },
            });

            // Clear all auth-related cookies
            Cookies.remove('token');
            Cookies.remove('userId');
            Cookies.remove('userData');

            setUser(null);
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};