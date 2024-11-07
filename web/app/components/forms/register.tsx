'use client';

import { client } from '@/app/lib/api/api';
import * as React from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  const [activationCode, setActivationCode] = React.useState('');
  const [registrationSuccess, setRegistrationSuccess] = React.useState(false);

  const usernameRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = usernameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    // if (!username || !email || !password) {
    //   return;
    // }

    try {
      const { data, error, response } = await client.POST(
        '/authentication/user',
        {
          body: {
            username: username ?? '',
            email: email ?? '',
            password: password ?? '',
          },
        }
      );
      console.log(error, response);
      if (!response.ok || error) {
        alert('Registration failed');
        return;
      }

      if (data?.token) {
        setActivationCode(data.token);
        setRegistrationSuccess(true);
      }

      console.log('Registration successful:', data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const handleActivateAccount = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!activationCode) {
      return;
    }

    try {
      const { response } = await client.PUT(`/users/activate/{token}`, {
        params: {
          path: {
            token: activationCode,
          },
        },
      });
      if (!response.ok) {
        alert('Activation failed');
        return;
      }
      setRegistrationSuccess(false);
      setActivationCode('');

      // Redirect to login page
      router.push('/login');
    } catch (error) {
      console.error('Activation failed:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      {registrationSuccess && activationCode ? (
        <div>
          <h1 className="text-2xl font-bold">Activation Code Sent</h1>
          <button onClick={handleActivateAccount}>Activate Account</button>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold">Register</h1>
          <form
            className="flex flex-col items-center justify-center gap-4 text-black"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Username"
              className="p-2 border rounded"
              ref={usernameRef}
            />
            <input
              type="text"
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
              Register
            </button>
          </form>
        </>
      )}
    </div>
  );
}
