import Link from "next/link";
import {HeroLogo} from "./assets/Logo";

export const Navbar = () => {
    return (
        <nav className="fixed max-w-screen-2xl w-full px-40 mt-8 bg-transparent">
            <div className="w-3/5">
                <div className="flex justify-between">
                    <HeroLogo/>
                    <ul className="flex gap-6">
                        <li><Link href="#hero">Popular offices</Link></li>
                        <li><Link href="#section_2">About company</Link></li>
                        <li><Link href="#section_3">Office showreel</Link></li>
                        <li><Link href="#section_4">Contacts</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
