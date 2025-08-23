// src/components/LoginForm.tsx
import { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const login = useAuthStore((state) => state.login);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/dashboard'); // ✅ Redirige al dashboard después de login
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-blue-800 p-6 rounded-md text-white w-80 mx-auto shadow-lg"
    >
      <h2 className="text-xl mb-4 text-center font-bold">Iniciar Sesión</h2>

      {error && <p className="text-red-400 mb-2 text-center">{error}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-3 p-2 rounded text-black focus:outline-none"
        required
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-3 p-2 rounded text-black focus:outline-none"
        required
      />

      <button
        type="submit"
        className={`w-full p-2 rounded shadow-lg bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 transition ${
          loading ? 'opacity-50 cursor-not-allowed' : 'hover:brightness-110'
        }`}
        disabled={loading}
      >
        {loading ? 'Iniciando...' : 'Iniciar Sesión'}
      </button>
    </form>
  );
};
