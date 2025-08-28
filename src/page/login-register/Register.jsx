import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react';
import { Link } from "react-router-dom";

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting }
    } = useForm();

    const password = watch('password');

    const onSubmit = async (data) => {
        // Simular llamada a API
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Register data:', data);
        alert('Registro exitoso!');
    };

    return (
        <div className=' w-full h-auto flex items-center justify-center'>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                {/* Encabezado */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-blue-600 mb-4">
                        EnElAula
                    </h1>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Crear Cuenta
                    </h2>
                    <p className="text-gray-600">
                        Completa tus datos para registrarte
                    </p>
                </div>

                {/* Formulario */}
                <div className="space-y-5">
                    {/* Full Name */}
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                            Nombre Completo
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                id="fullName"
                                type="text"
                                className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Juan Pérez"
                                {...register('fullName', {
                                    required: 'El nombre completo es requerido',
                                    minLength: {
                                        value: 2,
                                        message: 'El nombre debe tener al menos 2 caracteres'
                                    }
                                })}
                            />
                        </div>
                        {errors.fullName && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.fullName.message}
                            </p>
                        )}
                    </div>

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

                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Teléfono
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Phone className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                id="phone"
                                type="tel"
                                className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="+56 9 1234 5678"
                                {...register('phone', {
                                    required: 'El teléfono es requerido',
                                    pattern: {
                                        value: /^(\+?56|0)?9\d{8}$/,
                                        message: 'Formato de teléfono chileno inválido'
                                    }
                                })}
                            />
                        </div>
                        {errors.phone && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.phone.message}
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
                                        value: 8,
                                        message: 'La contraseña debe tener al menos 8 caracteres'
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                                        message: 'Debe contener mayúscula, minúscula y número'
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

                    {/* Confirm Password */}
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                            Confirmar Contraseña
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                id="confirmPassword"
                                type={showConfirmPassword ? 'text' : 'password'}
                                className={`w-full pl-10 pr-12 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="••••••••"
                                {...register('confirmPassword', {
                                    required: 'Confirma tu contraseña',
                                    validate: value =>
                                        value === password || 'Las contraseñas no coinciden'
                                })}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? (
                                    <EyeOff className="h-5 w-5 text-gray-400" />
                                ) : (
                                    <Eye className="h-5 w-5 text-gray-400" />
                                )}
                            </button>
                        </div>
                        {errors.confirmPassword && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>

                    {/* Terms */}
                    <div className="flex items-start">
                        <input
                            id="terms"
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                            {...register('terms', {
                                required: 'Debes aceptar los términos y condiciones'
                            })}
                        />
                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                            Acepto los{" "}
                            <button className="text-blue-600 hover:text-blue-500 underline">
                                términos y condiciones
                            </button>{" "}
                            y la{" "}
                            <button className="text-blue-600 hover:text-blue-500 underline">
                                política de privacidad
                            </button>
                        </label>
                    </div>
                    {errors.terms && (
                        <p className="text-sm text-red-600">
                            {errors.terms.message}
                        </p>
                    )}

                    {/* Botón submit */}
                    <button
                        type="button"
                        disabled={isSubmitting}
                        onClick={handleSubmit(onSubmit)}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
                    >
                        {isSubmitting ? 'Creando cuenta...' : 'Crear Cuenta'}
                    </button>
                </div>

                {/* Link a login */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        ¿Ya tienes cuenta?{" "}
                        <Link
                            to="/"
                            className="text-blue-600 hover:text-blue-500 font-medium"
                        >
                            Inicia sesión aquí
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
