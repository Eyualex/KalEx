'use client'; // 👈 This tells Next.js it's a Client Component

import { useRouter } from 'next/navigation';
import LoginForm from '../components/common/LoginForm';

export default function LoginPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back(); // navigates to the previous page
  };

  return (
    <div>
      <button onClick={handleBack} style={{ marginBottom: '1rem' }}>
        ← Back
      </button>
      <LoginForm />
    </div>
  );
}
