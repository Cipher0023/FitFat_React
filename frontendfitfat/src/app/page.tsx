import React from 'react'
import Test from '@/components/componenTest/test'
import CustomHeader from '@/components/Header/CustomHeader'

function Home() {
  return (

    <div className='grid gap-8'>
      <>
        <Test/>
        <CustomHeader/>
      </>
    </div>
  )
}

export default Home