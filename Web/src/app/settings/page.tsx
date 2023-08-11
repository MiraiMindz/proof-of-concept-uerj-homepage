'use client';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { Cog, User, House } from '../assets/Icons';
import { useState, useEffect } from "react";

const sidebarNavItemStyle = `flex flex-row justify-between items-center
cursor-default hover:cursor-pointer
hover:fill-blue-600 dark:hover:fill-blue-400
transition-all
fill-neutral-900 dark:fill-neutral-50
text-neutral-900 dark:text-neutral-50
hover:text-blue-600 dark:hover:text-blue-400`;

const iconsSize = "w-6 h-6";

const sidebarTextStyle = "font-bold pl-4 w-32 font-oswald";

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

        const handleTheme = () => {
            setIsDarkTheme(!isDarkTheme);
            !isDarkTheme
                ? localStorage.setItem("theme", "dark")
                : localStorage.setItem("theme", "light");
        };
        return (
            <div className={(isDarkTheme ? "dark " : "light ") + "w-full h-full"}>
                <main className="w-full h-full flex flex-row items-center bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50">
                    <div className="w-fit h-full py-2 pl-2">
                        <nav className="flex flex-col justify-between h-full w-12 rounded-xl border-2 hover:w-40 overflow-hidden transition-all relative border-neutral-900 dark:border-neutral-50">
                            <div className="absolute top-2 left-0">
                                <Link href="/home" className={sidebarNavItemStyle}>
                                    <div className="content-[''] mr-1.5 w-1 h-8"></div>
                                    <div className={`${iconsSize}`}>
                                        <House />
                                    </div>
                                    <h1 className={sidebarTextStyle}>Página Inicial</h1>
                                </Link>
                            </div>
                            <div className="h-[4.5rem] flex flex-col justify-between items-start absolute bottom-2 left-0">
                                <Link href="/userzone" className={sidebarNavItemStyle}>
                                    <div className="content-[''] mr-1.5 w-1 h-8"></div>
                                    <div className={`${iconsSize}`}>
                                        <User />
                                    </div>
                                    <h1 className={sidebarTextStyle}>Informações</h1>
                                </Link>
                                <Link href="/settings" className={sidebarNavItemStyle}>
                                    <div className="content-[''] mr-1.5 w-1 h-8 rounded-r-xl  bg-neutral-900 dark:bg-neutral-50"></div>
                                    <div className={`${iconsSize}`}>
                                        <Cog />
                                    </div>
                                    <h1 className={sidebarTextStyle}>Configurações</h1>
                                </Link>
                            </div>
                        </nav>
                    </div>
                    <main className="w-full h-full flex justify-center items-start p-2">
                        <section>
                            <h1>Configurações</h1>
                            <button onClick={handleTheme}>trocar tema</button>
                        </section>
                    </main>
                </main>
            </div>
        )
    }
}
