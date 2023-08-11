'use client';
import { useRouter } from "next/navigation";
import { Logo } from './assets/Logo';
import { useState, ChangeEvent, FormEvent } from 'react';

let inputStyle = `my-2 bg-transparent rounded-lg border-2
border-neutral-50
placeholder:text-center placeholder:text-neutral-50/75 text-center`;

let buttonStyle = `mt-4 rounded-lg border-2 border-neutral-50 
bg-transparent text-neutral-50 w-fit px-2 transition-all
hover:bg-neutral-50 hover:text-neutral-900`;


interface UserData {
    username: string;
    password: string;
}


async function generateHash(str: string, algorithm = "SHA-512") {
    let strBuffer = new TextEncoder().encode(str);
    return crypto.subtle.digest(algorithm, strBuffer)
        .then(hash => {
            let result = '';
            const view = new DataView(hash);
            for (let i = 0; i < hash.byteLength; i += 4) {
                result += ('00000000' + view.getUint32(i).toString(16)).slice(-8);
            }
            return result;
        });
}


export default function Home() {
    if (localStorage.getItem('sessionID')) {
        localStorage.removeItem('sessionID');
    }

    const [register, setRegister] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const router = useRouter();

    const handleRegisterChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRegister(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const fetchData = async (apiUrl: string) => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    };

    const LoginUser = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const hashedRegister = await generateHash(register);
        const hashedPassword = await generateHash(password);
        console.log("password", password, typeof password);
        console.log("register", register, typeof register);
        console.log("hashedRegister", hashedRegister, typeof hashedRegister)
        console.log("hashedPassword", hashedPassword, typeof hashedPassword)

        const apiUrl = `http://localhost:8080/users/${hashedRegister}`;

        const fetchedData: UserData = await fetchData(apiUrl);
        if (fetchedData) {
            console.log("dbRegister", fetchedData?.username, typeof fetchedData?.username)
            console.log("dbPassword", fetchedData?.password, typeof fetchedData?.password)

            if (hashedRegister === fetchedData?.username) {
                if (hashedPassword === fetchedData?.password) {
                    localStorage.setItem('sessionID', hashedRegister);
                    router.push('/home');
                } else {
                    console.log("INCORRECT PASSWORD")
                }
            } else {
                console.log("INCORRECT USERNAME")
            }
        } else {
            console.log("Failed to fetch data");
        }
    };


    return (
        <main className="bg-loginBG bg-no-repeat bg-cover flex flex-row-reverse items-start justify-start w-full h-full text-neutral-50">
            <section className="p-8 flex-col justify-center items-center h-full backdrop-blur bg-neutral-900/50">
                <h1 className="font-squadaOne mb-4 text-center text-2xl">Portal do Aluno</h1>
                <div className='w-full flex justify-center items-center'>
                    <div className='w-24 h-24 flex items-center justify-center fill-neutral-50'>
                        <Logo />
                    </div>
                </div>
                <h1 className="font-squadaOne mt-12 mb-4 text-center text-2xl">Login</h1>
                <form className="flex flex-col w-min justify-center items-center" onSubmit={LoginUser}>
                    <input id="register" type="password"
                        placeholder="Insira sua matricula" className={inputStyle}
                        onChange={handleRegisterChange} />
                    <input id="password" type="password"
                        placeholder="Insira sua senha" className={inputStyle}
                        onChange={handlePasswordChange} />
                    <button className={buttonStyle} type="submit">Entrar</button>
                </form>
            </section>
            <div className="content-[''] h-full mb-2 rounded-full w-2 -mr-1 bg-neutral-900 z-10"></div>
        </main>
    );
}


