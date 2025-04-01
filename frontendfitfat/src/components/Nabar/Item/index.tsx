import Link from "next/link"

export interface NavItemInterface {
    
    url: string,
    label: string
    isActive?: boolean

}
export default function NavItem(props: NavItemInterface){
    return(
        <li className={`m-5 transition-colors duration-200 
                        border-b-2 border-transparent hover:text-blue-500 hover:border-blue-500
                        ${props.isActive ? 'text-blue-500 font-bold' : ''}`}>
            <Link href={props.url} className="" >
                {props.label}
            </Link>
        </li>
    )
}