import { ComponentProps } from "react";

interface NavLilnkProps extends ComponentProps<'a'> {
    children: string;
}

export function NaveLink(props: NavLilnkProps){
    return (
        <a {...props} className=" font-medium text-sm text-zinc-300">
            {props.children}
        </a>
    )
}