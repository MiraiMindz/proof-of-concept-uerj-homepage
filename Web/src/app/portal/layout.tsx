"use client";

import './globals.css'
import { FontsVariables, Navbar } from '../assets/styles';
import { useAuth } from '../utils/Contexts';


import { block } from 'million/react';

export default block(
    function PortalLayout({ children }: { children: React.ReactNode }) {
        const { isLoggedIn } = useAuth();
        if (!isLoggedIn) {
            return <p>Please log in to access this page.</p>;
        }

        return (
            <div className={`${FontsVariables} font-inter w-screen h-screen flex flex-row justify-start items-start`}>
                <div>
                    <nav className='flex flex-col justify-between items-center'>
                        <div className=''>
                            <div>
                                icon
                            </div>
                            <h1>text</h1>
                        </div>
                    </nav>
                </div>
                <main>
                    {children}
                </main>
            </div>
        );
    });
