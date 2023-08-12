import { Inter, Oswald, Squada_One } from 'next/font/google'

interface StylesProps {
    [key: string]: any
}

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-Inter'
})

const squadaOne = Squada_One({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-Squada-One'
});

const oswald = Oswald({
    weight: ['200', '300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-Oswald'
});

let Fonts: StylesProps = {};
let Navbar: StylesProps = {};
let FontsVariables: string = `${oswald.variable} ${squadaOne.variable} ${inter.variable}`;



Fonts.Oswald = oswald.className;
Fonts.squadaOne = squadaOne.className;
Fonts.Inter = inter.className;



Navbar.Item = `flex flex-row justify-between items-center
cursor-default hover:cursor-pointer
hover:fill-blue-600 dark:hover:fill-blue-400
transition-all
fill-neutral-900 dark:fill-neutral-50
text-neutral-900 dark:text-neutral-50
hover:text-blue-600 dark:hover:text-blue-400`;
Navbar.IconSize = "w-6 h-6";
Navbar.TextStyle = "font-bold pl-4 w-32 font-oswald";

export { Fonts, FontsVariables, Navbar };

