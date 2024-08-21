'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../../globals.css';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
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
          <h1 className="text-5xl font-bold mb-4">Bem-vindo!</h1>
          <p className="text-xl">Crie sua conta</p>
          <p className="text-xl">para acessar todas</p>
          <p className="text-xl">as funcionalidades.</p>
        </div>
      </div>

      {/* Right Section with Register Form */}
      <div className="w-full max-w-md flex-none bg-blue-900 bg-opacity-80 flex flex-col backdrop-blur justify-center items-center p-5">
        <div className="p-6 rounded-lg  w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img src="\escrita_preta_logo.png" alt="Teacher Web Logo" className="w-56" />
          </div>

          {/* Register Form */}
          <form onSubmit={handleRegister}>
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

            <div className="mb-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 bg-transparent border-b-2 border-white rounded-none text-white  focus:outline-none focus:border-blue-500 placeholder-white"
                placeholder="Senha"
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full p-2 bg-transparent border-b-2 border-white rounded-none text-white  focus:outline-none focus:border-blue-500 placeholder-white"
                placeholder="Confirme a Senha"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black p-2 rounded-full hover:bg-gray-300 transition"
            >
              Criar Conta
            </button>
          </form>

          {/* Link to Login Page */}
          <div className="mt-6 text-center">
            <p className="text-white">Já tem uma conta? <Link href="/auth/login" className="underline">Faça login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
