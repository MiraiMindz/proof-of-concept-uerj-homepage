'use client';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { Cog, User, House } from '../assets/Icons';
import { useState, useEffect } from "react";
import { FontsVariables, Fonts, Navbar } from "../assets/styles";


export default function Page() {
    const router = useRouter();
    if (!localStorage.getItem('sessionID')) {
        router.push('/');
        return (
            <main className="w-full h-full flex justify-center items-center">
                <h1>Sessão não encontrada</h1>
                <h2>Redirecionando para o login</h2>
            </main>
        )
    } else {
        // Theme Switcher
        const [isDarkTheme, setIsDarkTheme] = useState(false);

        useEffect(() => {
            if (window !== undefined) {
                const getCurrentTheme = () =>
                    window.matchMedia("(prefers-color-scheme: dark)").matches;
                const localStorageTheme = localStorage.getItem("theme");

                setIsDarkTheme(
                    localStorageTheme === "dark" ||
                    (!localStorageTheme && getCurrentTheme()),
                );

                const mqListener = (e: any) => {
                    setIsDarkTheme(e.matches);
                    e.matches
                        ? localStorage.setItem("theme", "dark")
                        : localStorage.setItem("theme", "light");
                };

                const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
                darkThemeMq.addListener(mqListener);

                return () => darkThemeMq.removeListener(mqListener);
            }
        }, []);

        return (
            <div className={(isDarkTheme ? "dark " : "light ") + FontsVariables + " w-full h-full " + Fonts.Inter}>
                <main className="w-full h-full flex flex-row items-center bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50">
                    <div className="w-fit h-full py-2 pl-2">
                        <nav className="flex flex-col justify-between h-full w-12 rounded-xl border-2 hover:w-40 overflow-hidden transition-all relative border-neutral-900 dark:border-neutral-50">
                            <div className="absolute top-2 left-0">
                                <Link href="/home" className={Navbar.Item}>
                                    <div className="content-[''] mr-1.5 w-1 h-8 rounded-r-xl bg-neutral-900 dark:bg-neutral-50"></div>
                                    <div className={`${Navbar.IconSize}`}>
                                        <House />
                                    </div>
                                    <h1 className={`${Navbar.TextStyle} ${Fonts.Oswald}`}>Página Inicial</h1>
                                </Link>
                            </div>
                            <div className="h-[4.5rem] flex flex-col justify-between items-start absolute bottom-2 left-0">
                                <Link href="/userzone" className={Navbar.Item}>
                                    <div className="content-[''] mr-1.5 w-1 h-8"></div>
                                    <div className={`${Navbar.IconSize}`}>
                                        <User />
                                    </div>
                                    <h1 className={Navbar.TextStyle}>Informações</h1>
                                </Link>
                                <Link href="/settings" className={Navbar.Item}>
                                    <div className="content-[''] mr-1.5 w-1 h-8"></div>
                                    <div className={`${Navbar.IconSize}`}>
                                        <Cog />
                                    </div>
                                    <h1 className={Navbar.TextStyle}>Configurações</h1>
                                </Link>
                            </div>
                        </nav>
                    </div>
                    <main className="w-full h-full flex justify-center items-start p-2">
                        <section>
                            <h1>Página Inicial</h1>
                        </section>
                    </main>
                </main>
            </div>
        )
    }
}

