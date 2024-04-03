import nlwIcon from "../assets/nlw-icon.svg"
import { NaveLink } from "./nav-link"
export function Header(){
    return (
        <div className="flex items-center gap-5 py-2">
            <img src={nlwIcon} alt="" />
            <nav className="flex items-center gap-5">
                <NaveLink href="/eventos">
                    Eventos
                </NaveLink>
                <NaveLink href="/participantes">
                    Participantes
                </NaveLink>
            </nav>
        </div>
       
    )
}