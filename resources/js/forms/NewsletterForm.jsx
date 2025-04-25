import React, { useState } from 'react';

const NewsletterForm = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value);
        setError('');
    };

    const validateEmail = () => {
        if (!email.trim()) {
            setError('El email es requerido');
            return false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError('El email no es válido');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error('Error al suscribirse');
            }

            setSubmitSuccess(true);
            setEmail('');

            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);

        } catch (error) {
            setError('Error al suscribirse. Por favor, intente nuevamente.');
            console.error('Error subscribing to newsletter:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            {submitSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                    <span className="block sm:inline">¡Gracias por suscribirse a nuestro boletín!</span>
                </div>
            )}

            <div className="flex flex-col sm:flex-row">
                <div className="flex-1">
                    <input
                        type="email"
                        placeholder="Tu correo electrónico"
                        value={email}
                        onChange={handleChange}
                        className={`w-full p-3 rounded-l-md border-y border-l ${error ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
                </div>
                <button
                    type="submit"
                    className="bg-primary hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-r-md transition duration-300 mt-2 sm:mt-0"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Enviando...' : 'Suscribirse'}
                </button>
            </div>
        </form>
    );
};

export default NewsletterForm;
