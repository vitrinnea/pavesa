import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
        './resources/**/*.jsx',
    ],
    theme: {
        extend: {
            fontFamily: {
                lafargebook: ['LaFarge-Book', 'sans-serif'],
                manropebold: ['Manrope-Bold', 'sans-serif'], // Añade la nueva fuente aquí
            },
        },
    },
    plugins: [],
};
