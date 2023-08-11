"use client";
import { useRouter } from "next/navigation";
import { Cog, User, House } from '../assets/Icons';

const sideBarNavIconsStyle = `w-6 h-6`;

const sidebarNavItemStyle = `flex flex-row justify-between items-center
cursor-default hover:cursor-pointer
hover:fill-blue-600 dark:hover:fill-blue-400
transition-all
fill-neutral-900 dark:fill-neutral-50
text-neutral-900 dark:text-neutral-50
hover:text-blue-600 dark:hover:text-blue-400
`;

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
        return (
            <main className="w-full h-full flex-row items-center">
                <nav className="h-[98%] w-fit flex ml-1 my-2 mr-2 border-2 p-2 rounded-xl h-full w-11 border-neutral-900 dark:border-neutral-50 overflow-hidden hover:w-40 transition-all">
                    <div className="flex flex-col justify-between items-center">
                        <div>
                            <div className={sidebarNavItemStyle}>
                                <div className={`${sideBarNavIconsStyle} -ml-2.5`}>
                                    <House />
                                </div>
                                <h1 className="text-sm ml-4">Página Inicial</h1>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between items-start h-16">
                            <div className={`${sidebarNavItemStyle}`}>
                                <div className={sideBarNavIconsStyle}>
                                    <User />
                                </div>
                                <h1 className="text-sm ml-4">Informações</h1>
                            </div>
                            <div className={`${sidebarNavItemStyle}`}>
                                <div className={sideBarNavIconsStyle}>
                                    <Cog />
                                </div>
                                <h1 className="text-sm ml-4">Configurações</h1>
                            </div>
                        </div>
                    </div>
                </nav>
            </main>
        )
    }
}

