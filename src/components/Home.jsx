import React from 'react'
import CategoryBox from './CategoryBox'
import hero from '../assets/hero.png'

export default function Home() {
    return (
        <div className='hero'>
            <img src={hero} />
            <p>home</p>
            <CategoryBox />
        </div>
    )
}
