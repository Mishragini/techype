export interface User {
    id: string;
    email: string;
    username: string;
}

export interface AuthResponse {
    statusCode: number;
    message: string;
    data: any;
    success: boolean;
    error: null | string;
}