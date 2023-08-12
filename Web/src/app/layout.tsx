import './globals.css'
import type { Metadata } from 'next'
import { FontsVariables } from './assets/styles';



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
            <body id="ROOTBODY" className={`${FontsVariables} 
                                font-inter w-screen h-screen`}>
                {children}
            </body>
        </html>
    )
}
