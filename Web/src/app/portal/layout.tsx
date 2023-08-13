"use client";

import './globals.css'
import { FontsVariables, Navbar } from '../assets/styles';
import { block } from 'million/react';

export default block(function PortalLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={`${FontsVariables} font-inter w-screen h-screen`}>
            <div>
                <nav className='flex flex-col justify-between items-center'>
                    <div className=''>

                    </div>
                </nav>
            </div>
            <main>
                {children}
            </main>
        </div>
    )
});
