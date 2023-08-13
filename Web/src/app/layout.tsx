import './globals.css';
import type { Metadata } from 'next';
import BodyLayout from './layouts/BodyLayout';

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
            <body>
                <BodyLayout>
                    {children}
                </BodyLayout>
            </body>
        </html>
    )
}
