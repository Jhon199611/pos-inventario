import { LoginForm } from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600">Bienvenido a TuERP</h1>
        <p className="text-slate-600 mt-2">Inicia sesión para administrar tu negocio</p>
      </div>
      <LoginForm />
      <h1>USUARIO: jhon199611@gmail.com</h1>
      <h1>CONTRASEÑA: 12345678</h1>
    </div>
  );
}
