import { Squada_One } from 'next/font/google'

const SquadaOne = Squada_One({ subsets: ['latin'] })

export default function Home() {
    return (
        <main className="flex flex-row items-start justify-between w-full h-full">
            <div className="bg-loginBG bg-no-repeat bg-cover w-full h-screen">
                <div className="content-[''] bg-gradient-to-r from-transparent to-neutral-50 dark:to-neutral-900 w-full h-full"></div>
            </div>
            <section className="pr-8 pt-8 pl-4 pr-8 flex-col justify-between items-center h-full bg-blue-400">
                <h1 className={`${SquadaOne.className} mb-4 text-center`}>Login</h1>
                <form className="flex flex-col bg-red-400">
                    <input type="text" placeholder="Insira sua matricula" className="my-2" />
                    <input type="password" placeholder="Insira sua senha" className="my-2" />
                    <button type="submit">Entrar</button>
                </form>

            </section>
        </main>
    )
}
