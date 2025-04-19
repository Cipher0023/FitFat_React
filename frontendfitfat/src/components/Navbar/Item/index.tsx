"use"
import Link from "next/link"
import { Chakra_Petch } from 'next/font/google';

export interface NavItemInterface {
  url: string,
  label: string
  isActive?: boolean

}

const chakra = Chakra_Petch({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function NavItem(props: NavItemInterface){
  return(
    <li className={`m-5 text-4xl ${chakra.className} font-medium transition-colors duration-200
      border-b-2 border-transparent hover:text-blue-700 hover:border-blue-700
      ${props.isActive ? 'text-blue-700 font-bold' : ''}`}
    >
      <Link href={props.url} className="" >
        {props.label}
      </Link>
    </li>
  )
}