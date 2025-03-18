import React from 'react'
import { useState } from 'react'

interface TabProps {
    children: React.ReactNode;
}

const Tab = ({ children }: TabProps) => {
    return (
        <li className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base">
            {children}
        </li>
    )
}

const SliderTabs= () => {

    const [position,setPosition] = useState({
        left:0,
        right:0,
        opacity:0,
    })

    return (
        <ul className='relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1'>
            <Tab>test1</Tab>
            <Tab>test2</Tab>
            <Tab>test3</Tab>
            <Tab>test4</Tab>
            <Cursor/>
        </ul>
    )
}

const Cursor = () =>{
    return(
        <li className='absolute z-0 h-7 rounded-full bg-black md:h-12'/>
    )
}

export default function SideMenu() {
    return (
        <div className="grid h-screen place-content-center bg-neutral-100">
            <SliderTabs/>
        </div>
    )
}
