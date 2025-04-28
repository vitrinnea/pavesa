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
                milligrambold: ['Milligram-Bold', 'sans-serif'],
                milligramregular: ['Milligram-Regular', 'sans-serif'],
                integralcfheavy: ['Integral-CF-Heavy', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
