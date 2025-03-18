'use client'
import React from 'react'
import SideMenu from '@/components/sideMenu/SideMenu'
import { TextHoverEffect } from '@/components/ui/text-hover-effect'
import { Carousel2 } from '@/components/Carousel/Carousel'
import { Button } from '@/components/ui/button'
import { BentoGridThirdDemo } from '@/components/BentoGrid/BentoGrid'
import { Chart } from '@/components/Graph/Graph'



const page = () => {
  return (
    <div>
        <h1>dashboard</h1>
        <SideMenu/>

        <Carousel2/>

        <Button>teste</Button>

        <TextHoverEffect text="TEXTE DE TEXTO" />

        <BentoGridThirdDemo></BentoGridThirdDemo>

        <Chart/>
    </div>
  )
}

export default page