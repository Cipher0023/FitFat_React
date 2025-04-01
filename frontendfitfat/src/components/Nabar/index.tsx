"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavItem, { NavItemInterface } from "../Nabar/Item/index";
import { usePathname } from "next/navigation";


export default function Navbar() {

    const items: NavItemInterface[] = [
        {
            url: "/",
            label: "Início"
        },
        {
            url: "/produtos",
            label: "Produtos"
        },
        {
            url: "/sobre",
            label: "sobre"
        },
        {
            url: "/contato",
            label: "Contato"
        }
    ];

    const pathName = usePathname();

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
                            isActive={pathName === item.url}
                        />
                    ))}
                </ul>

                <Link href="/login" className="p-2 border-3 border-transparent bg-black text-white rounded-full hover:border-blue-500">
                Login
                </Link>

            </nav>
        </header>
    );
}
