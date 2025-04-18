
"use client"
import React from 'react'
import { useState } from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps {
  url: string
  label: string
  isActive?: boolean
}

const ButtonIII: React.FC<ButtonProps> = ({ label, isActive = false }) => {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <li>
      <div className="relative inline-block">
        <div className='bg-black absolute inset-0 top-[4px] left-[3px] right-[-2px] bottom-[-4px] rounded-full' />
        <button
          className={cn(
            "relative inline-flex items-center justify-center",
            "px-6 h-12 font-normal text-base",
            "select-none rounded-full",
            "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 from-40% to-gray-600",
            "shadow-sm",
            "transition-all duration-200 ease-out",
            isPressed && "translate-y-[4px] translate-x-[2px] shadow-none",
            isActive && "from-gray-300 to-gray-800",
            "focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-400"
          )}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onMouseLeave={() => setIsPressed(false)}
          onTouchStart={() => setIsPressed(true)}
          onTouchEnd={() => setIsPressed(false)}
        >
          <span className="text-gray-900">{label}</span>
        </button>
      </div>
    </li>
  )
}

export default ButtonIII
