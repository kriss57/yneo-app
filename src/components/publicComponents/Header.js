import Link from "next/link"
import Image from "next/image"

export default () => {
    return (
        <header>

            <nav>
                <ul>
                    <li className="name"><Link href="/" >
                        <Image
                            src="/ico/sphere.webp"
                            alt="Icône"
                            width={10}
                            height={10}
                        />  Name/acceuil</Link></li>
                    <li className="bob"><Link href="/fonctions">Fonctions</Link></li>
                    <li className="bob"><Link href="/boutiques" >Boutiques</Link></li>
                    <li className="bob"><Link href="/tarifs" >Tarifs</Link></li>
                    <li className="bob"><Link href="/propos">À propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}