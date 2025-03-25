
import Link from "next/link";
import Image from "next/image";
import NavItem, { NavItemInterface } from "../Nabar/Item/index";

export default function Navbar() {

    const items: NavItemInterface[] = [
        {
            url: "/",
            label: "Início"
        },
        {
            url: "/",
            label: "Produtos"
        },
        {
            url: "/",
            label: "About"
        },
        {
            url: "/",
            label: "Contato"
        }
    ];

    return (
        <header>
            <nav className=" flex flex-row text-3xl justify-between items-center box-border">
                <Link href="/">
                    <Image src="cubicLogo.svg" width={100} height={100} alt="logo da empresa" />
                </Link>

                <ul className="flex flex-row">
                    {items.map((item, index) => (
                        <NavItem
                            key={index}
                            url={item.url}
                            label={item.label}
                        />
                    ))}
                </ul>

                <button className="p-5">
                    Botão
                </button>

            </nav>
        </header>
    );
}
