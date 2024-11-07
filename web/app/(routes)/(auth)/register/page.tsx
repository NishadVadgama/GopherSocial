import * as React from 'react';
import Register from '@/app/components/forms/register';

export default function RegisterPage() {
  if (typeof window !== 'undefined') {
    return null;
  }

  return <Register />;
}
