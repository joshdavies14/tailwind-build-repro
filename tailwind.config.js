/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: 'rgb(var(--colour-primary) / <alpha-value>)',
                'primary-dark': 'rgb(var(--colour-primary-dark) / <alpha-value>)',
                'primary-highlight': 'rgb(var(--colour-primary-highlight) / <alpha-value>)',
                'primary-lighter': 'rgb(var(--colour-primary-lighter) / <alpha-value>)',
                'primary-light': 'rgb(var(--colour-primary-light) / <alpha-value>)',
                'primary-vibrant': 'rgb(var(--colour-primary-vibrant) / <alpha-value>)',
                'primary-vibranter': 'rgb(var(--colour-primary-vibranter) / <alpha-value>)',
                'primary-tint': 'rgb(var(--colour-primary-tint) / <alpha-value>)',
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    safelist: [
        {
            pattern: /max-w-*/,
            variants: ['sm', 'md', 'lg'],
        },
        'h-screen',
        'min-h-screen',
        {
            pattern: /w-*/,
            variants: ['sm', 'md', 'lg'],
        }
    ],
};
