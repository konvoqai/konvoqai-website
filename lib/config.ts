/** Dashboard app URL — set NEXT_PUBLIC_APP_URL in .env.local for production */
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3051';

export const SIGNUP_URL = `${APP_URL}/signup`;
export const LOGIN_URL = `${APP_URL}/login`;
