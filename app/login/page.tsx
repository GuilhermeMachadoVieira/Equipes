"use client"; 
import AuthForm from '../../components/AuthForm';

const LoginPage = () => {
  const handleLogin = (email: string, password: string) => {
    // Lógica de login aqui
    console.log('Login:', email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Entrar na sua conta
        </h2>
        <AuthForm mode="login" onSubmit={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;