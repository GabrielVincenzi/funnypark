import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"

function Navbar() {
    return (
        <nav className="flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                <h3>Funny Park</h3>
            </Link>
            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="navitem pb-1.5 transition-all hover:font-bold">
                        {link.label}
                    </Link>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar