import { StylesProps } from './interfaces';

interface NavbarProps extends StylesProps {
    Item: string;
    IconSize: string;
    TextStyle: string;
}

let Navbar: NavbarProps = {
    Item: `flex flex-row justify-between items-center
            cursor-default hover:cursor-pointer
            hover:fill-blue-600 dark:hover:fill-blue-400
            transition-all
            fill-neutral-900 dark:fill-neutral-50
            text-neutral-900 dark:text-neutral-50
            hover:text-blue-600 dark:hover:text-blue-400`,
    IconSize: "w-6 h-6",
    TextStyle: "font-bold pl-4 w-32 font-oswald",
};

export { Navbar };
