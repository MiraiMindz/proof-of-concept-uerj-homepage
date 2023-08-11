import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'loginBG': "url('/LoginSideBG.png')"
            },
            fontFamily: {
                'inter': ['var(--font-Inter)'],
                'squadaOne': ['var(--font-Squada-One)'],
                'oswald': ['var(--font-Oswald)']
            },
        },
        plugins: [],
    },
    darkMode: 'class'
}

export default config
