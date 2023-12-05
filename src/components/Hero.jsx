import React from 'react'
import Typed from 'react-typed';


const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <Typed className='md:text-2xl sm:text-2xl text-xl' 
        strings={['Google Developer Student Club Bakircay University']} typeSpeed={100} backSpeed={50} loop/>
            <h1 className=' text-[#00df9a] text-2xl font-bold p-4'>Hakkımızda</h1>
            <p className='md:text-2xl sm:text-2xl text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum in massa quis varius.
             Cras lacus felis, suscipit ut blandit sollicitudin, vulputate vitae sem. Curabitur pharetra justo, consectetur adipiscing elit. Nulla vestibulum in massa quis varius.
             Cras lacus felis, suscipit ut blandit sollicitudin, vulputate vitae sem. Curabitur pharetra justo, consectetur adipiscing elit. Nulla vestibulum in massa quis varius.
             Cras lacus felis, suscipit ut blandit sollicitudin, vulputate vitae sem. Curabitur pharetra justo </p>
        </div>
    </div>
  )
}

export default Hero