import { cookies } from 'next/headers';

export async function getUserSession() {
  try {
    const token = cookies().get('token')?.value;
    if (!token) return null;
    return token;
  } catch (error) {
    console.error(error);
    return null;
  }
}
