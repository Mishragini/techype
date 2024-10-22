import { AuthResponse } from "@/types/auth";

export const checkAuthToken = async () => {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');

    if (!userId || !token) return false;

    try {
        const response = await fetch('http://localhost:4000/users/checktoken', {
            method: 'POST',
            headers: {
                'userid': userId,
                'token': token,
            },
        });

        const data: AuthResponse = await response.json();
        return data.success;
    } catch (error) {
        console.log(error)
        return false;
    }
};