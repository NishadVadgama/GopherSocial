'use client';

import { client } from '@/app/lib/api/api';
import * as React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Login() {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get('next');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { response, error } = await client.POST('/authentication/token', {
        body: {
          email: emailRef.current?.value ?? '',
          password: passwordRef.current?.value ?? '',
        },
        credentials: 'include',
      });

      if (!response.ok || error) {
        alert('Invalid email or password');
        return;
      }

      if (response.ok) {
        router.push(next ?? '/dashboard');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <form
        className="flex flex-col items-center justify-center gap-4 text-black"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
          ref={emailRef}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded"
          ref={passwordRef}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
}
