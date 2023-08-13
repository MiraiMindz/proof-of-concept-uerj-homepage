import { Inter, Oswald, Squada_One } from 'next/font/google';
import { StylesProps } from './interfaces';

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
let FontsVariables: string = `${oswald.variable} ${squadaOne.variable} ${inter.variable}`;

Fonts.Oswald = oswald.className;
Fonts.squadaOne = squadaOne.className;
Fonts.Inter = inter.className;

export { Fonts, FontsVariables };

