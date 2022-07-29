import React from 'react';
import SmilyPhoto from '../../assets/Smilyphoto.jpg';
import { BookNow } from '../Header';
import SmilyFuck from '../../assets/images/MfVHZNbICY13KvvCQDeSY1vnY.webp'

function Hero() {
  return (
    <section className='w-screen max-w-screen bg-[rgb(220,240,241)] flex items-center justify-center flex-col'>
      <div className='container mx-auto flex items-center justify-center flex-col p-2 '>
        <div className='flex items-center justify-center gap-3 flex-col'>
          <div className='max-w-lg text-center p-2 flex items-center flex-col justify-center gap-3'>
            <h1 className='text-[#061c1c] text-4xl block font-semibold leading-tight'>Would you like to have a natural beautiful smile?</h1>
            <p className='text-[rgba(6,28,28,.8)] font-[500]'>Get a natural custom-made smile specially made for you</p>
          </div>
          <BookNow />
        </div>
      </div>
      <div className='max-w-full grid items-center justify-center overflow-hidden'>
       <div className='overflow-hidden w-[250px]'>
       <img src={SmilyFuck} className='w-full h-full' alt="" />
       </div>
      </div>
    </section>
  )
}

export default Hero