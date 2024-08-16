"use client"; 
import AuthForm from '../../components/AuthForm';

const RegisterPage = () => {
  const handleRegister = (email: string, password: string) => {
    console.log('Register:', email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Criar uma nova conta
        </h2>
        <AuthForm mode="register" onSubmit={handleRegister} />
      </div>
    </div>
  );
};

export default RegisterPage;