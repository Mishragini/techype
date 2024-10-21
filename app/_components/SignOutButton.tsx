'use client';

import { signOut } from "next-auth/react";

export default function SignOutButton() {
    return (
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={() => signOut({ callbackUrl: "/" })}>
            Logout
        </button>
    );
}