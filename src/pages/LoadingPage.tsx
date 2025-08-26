export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-100">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
        <p className="text-lg text-gray-700">Verificando sesión...</p>
      </div>
    </div>
  );
}