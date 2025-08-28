import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { Link } from "react-router-dom";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm();

    const onSubmit = async (data) => {
        // Simular llamada a API
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Login data:', data);
        alert('Login exitoso!');
    };

    return (
        <div className=' w-full h-[100vh] flex items-center justify-center'>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                {/* Encabezado */}
                <div className="mb-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Iniciar Sesión
                    </h2>
                    <p className="text-gray-600">
                        Ingresa tus credenciales para acceder
                    </p>
                </div>

                {/* Formulario */}
                <div className="space-y-6">
                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Correo Electrónico
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                id="email"
                                type="email"
                                className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="ejemplo@correo.com"
                                {...register('email', {
                                    required: 'El correo es requerido',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Correo electrónico inválido'
                                    }
                                })}
                            />
                        </div>
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Contraseña
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                className={`w-full pl-10 pr-12 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="••••••••"
                                {...register('password', {
                                    required: 'La contraseña es requerida',
                                    minLength: {
                                        value: 6,
                                        message: 'La contraseña debe tener al menos 6 caracteres'
                                    }
                                })}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5 text-gray-400" />
                                ) : (
                                    <Eye className="h-5 w-5 text-gray-400" />
                                )}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Recordarme & Olvidaste contraseña */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember"
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                {...register('remember')}
                            />
                            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                                Recordarme
                            </label>
                        </div>
                        <button className="text-sm text-blue-600 hover:text-blue-500">
                            ¿Olvidaste tu contraseña?
                        </button>
                    </div>

                    {/* Botón submit */}
                    <button
                        type="button"
                        disabled={isSubmitting}
                        onClick={handleSubmit(onSubmit)}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
                    >
                        {isSubmitting ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                    </button>
                </div>

                {/* Link a registro */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        ¿No tienes cuenta?{" "}
                        <Link
                            to="/register"
                            className="text-blue-600 hover:text-blue-500 font-medium"
                        >
                            Regístrate aquí
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
