import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'

const Header = () => {
    return (
        <header>   
        <div>
          <HeaderItem title="HOME"/>
        </div>
          <Image 
          clas
          src='/logo.png' width="140" height='50'/>         
        </header>
    )
}

export default Header
