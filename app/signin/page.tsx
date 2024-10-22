'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../_components/AuthProvider';
import Cookies from 'js-cookie';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const token = Cookies.get('token');
            const userId = Cookies.get('userId');

            // User is already logged in, log them out first
            await fetch('http://localhost:4000/users/logout', {
                method: 'POST',
                headers: {
                    'userid': userId!,
                },
            });
            Cookies.remove('token');
            Cookies.remove('userId');
            Cookies.remove('userData');

            const response = await fetch('http://localhost:4000/users/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (data.success) {
                login(data.data.token, data.data.userdata);
                router.push('/dashboard');
            } else {
                setError(data.message);
            }
        } catch (error) {
            console.error(error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md p-8">
                <h1 className="text-2xl font-bold mb-6">Sign In</h1>

                {error && <div className="text-red-500">{error}</div>}

                <div>
                    <label className="block mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Sign In
                </button>
                <div>
                    {"Don't have an account? "}
                    <button
                        onClick={() => { router.push('/signup') }}
                        className="text-blue-500 hover:text-blue-600"
                    >
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    );
}