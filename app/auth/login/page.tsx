// /app/auth/login/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../../globals.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex min-h-screen"
    style={{ backgroundImage: 'url(/fatec-sorocaba.jpeg)' }}
    >
      {/* Left Section with Welcome Text */}
      <div
        className="flex-1 relative bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="relative z-10 flex flex-col  items-start p-10 text-white h-full">
          <h1 className="text-5xl font-bold mb-4">Olá, professor!</h1>
          <p className="text-xl">Faça seu login ou cadastro</p>
          <p className="text-xl">para acessar todas</p>
          <p className="text-xl">as funcionalidades.</p>
        </div>
      </div>

      {/* Right Section with Login Form */}
      <div className="w-full max-w-md flex-none bg-blue-900 bg-opacity-80 flex flex-col backdrop-blur justify-center items-center p-5">
        <div className="p-6 rounded-lg  w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img src="\escrita_preta_logo.png" alt="Teacher Web Logo" className="w-56" />
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 bg-transparent border-b-2 border-white rounded-none text-white focus:outline-none focus:border-blue-500 placeholder-white"
                placeholder="E-mail"
              />
            </div>

            <div className="mb-4 relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 bg-transparent border-b-2 border-white rounded-none text-white  focus:outline-none focus:border-blue-500 placeholder-white"
                placeholder="Senha"
              />
              <Link href="#" className="absolute right-0 top-full mt-6 text-sm text-white">Esqueci minha senha</Link>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black p-2 rounded-full  hover:bg-gray-300 transition"
            >
              Entrar
            </button>
          </form>

          {/* Create Account and Google Login */}
          <div className="mt-6 flex flex-col space-y-4">
            <Link href="/auth/register">
              <button className="w-full bg-white rounded-full text-black p-2  hover:bg-gray-300 transition">
                Criar Conta
              </button>
            </Link>
            <button className="w-full flex items-center rounded-full justify-center bg-black text-white p-2  hover:bg-gray-300 transition">
              <img src="/google-logo.png" alt="Google Logo" className="w-5 h-5 mr-2" />
              ENTRAR COM GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
