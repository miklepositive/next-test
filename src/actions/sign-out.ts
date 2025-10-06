'use server';

import { signOut } from '@/auth/auth';

export async function signOutFunc() {
    try {
        return await signOut({ redirect: false });
    } catch (error) {
        console.error('Auth Error:', error);
        throw error;
    }
}
