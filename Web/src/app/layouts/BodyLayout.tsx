'use client';

import { AuthProvider } from "../utils/Contexts";
import { FontsVariables } from "../assets/styles";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            <body id="ROOTBODY" className={`${FontsVariables} 
                                font-inter w-screen h-screen`}>
                {children}
            </body>
        </AuthProvider>
    );
};
