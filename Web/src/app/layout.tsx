import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
            <body className={`${inter.className} w-screen h-screen bg-neutral-50 text-neutral-900 dark:text-neutral-50 dark:bg-neutral-900`}>{children}</body>
        </html>
    )
}
