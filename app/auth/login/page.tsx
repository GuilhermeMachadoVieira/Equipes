// /app/auth/login/page.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      router.push('/dashboard');
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 bg-white flex flex-col justify-center items-start p-10">
        <h1 className="text-4xl font-bold mb-4">Olá, Professor!</h1>
        <p className="text-lg">faça seu login ou cadastro para acessar todas funcionalidades.</p>
      </div>

      <div className="flex-1 relative bg-blue-500 bg-opacity-50 flex flex-col justify-center items-center p-10">
        <div className="absolute inset-0 bg-blue-500 opacity-50" />
        
        <div className="relative z-10 bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="Logo" className="w-24" />
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700">Usuário</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
            >
              Entrar
            </button>
          </form>

          <div className="flex justify-between items-center mt-4">
            <Link href="/auth/register" className="text-blue-500">
              Criar Conta
            </Link>
            <button className="text-blue-500">Entrar com o Google</button>
          </div>
        </div>
      </div>
    </div>
  );
}
