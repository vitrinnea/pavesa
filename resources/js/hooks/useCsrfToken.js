import { useState, useEffect } from 'react';

export const useCsrfToken = () => {
    const [token, setToken] = useState(() =>
        document.querySelector('meta[name="csrf-token"]')?.content || null
    );
    const [isValid, setIsValid] = useState(!!token);

    const refreshToken = async () => {
        try {
            const response = await fetch('/csrf-token', {
                credentials: 'same-origin'
            });

            if (!response.ok) throw new Error('Error refreshing token');

            const data = await response.json();
            setToken(data.token);
            setIsValid(true);

            // Actualizar el meta tag
            const metaToken = document.querySelector('meta[name="csrf-token"]');
            if (metaToken) metaToken.content = data.token;

            return data.token;
        } catch (error) {
            setIsValid(false);
            throw error;
        }
    };

    return { token, isValid, refreshToken };
};
