// @ts-ignore
import type { Config } from 'tailwindcss'

export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            screens: {
                xs361: '361px',
            },
            colors: {
                blueDefault: '#2662F3',
                blueHover: '#709AFE',
                bluePressed: '#1450E0',
                grayDefault: '#E7EBF2',
                grayHover: '#F4F5F7',
                grayPressed: '#E7EBF2',
                bgColor: '#E7EAFA',
                white: '#FFFFFF',
                black: '#1D2023',
            },
            boxShadow: {
                card: '0 10px 20px rgba(0,0,0,0.08)',
            },
            borderRadius: {
                xl: '48px',
            },
            fontFamily: {
                mont: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                onest: ['Onest', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
} satisfies Config