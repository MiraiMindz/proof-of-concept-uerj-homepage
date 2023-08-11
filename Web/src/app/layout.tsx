import './globals.css'
import type { Metadata } from 'next'
import { Inter, Oswald, Squada_One } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-Inter'
})

const squadaOne = Squada_One({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-Squada-One'
});

const oswald = Oswald({
    weight: ['200', '300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-Oswald'
});

export const metadata: Metadata = {
    title: 'Portal do Aluno',
    description: 'Portal do Aluno UERJ',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <body id="ROOTBODY" className={`${inter.variable} ${squadaOne.variable} ${oswald.variable}
                            font-inter w-screen h-screen`}>
                {children}
            </body>
        </html>
    )
}
