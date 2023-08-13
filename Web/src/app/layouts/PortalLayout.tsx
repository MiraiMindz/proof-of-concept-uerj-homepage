"use client";

import { FontsVariables } from '../assets/styles';
import { useAuth } from '../utils/Contexts';

export default function PortalLayout({ children }: any) {
    const { isLoggedIn, setIsLoggedIn } = useAuth();

    const checkSession = () => {
        if (window !== undefined) {
            console.log("WINDOW IS PRESENT PORTAL");
            if (typeof localStorage !== 'undefined') {
                console.log('LOCALSTORAGE IS PRESENT PORTAL');
                const sessionID = localStorage.getItem('sessionID');
                if (sessionID) {
                    console.log('SESSION ID IS PRESENT PORTAL');
                    setIsLoggedIn(true);
                }
            }
        }
    };

    checkSession();

    if (!isLoggedIn) {
        return <p>Please log in to access this page.</p>;
    } else {
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
    }
}
