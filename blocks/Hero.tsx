import React from 'react'
import Image from 'next/image'

const Hero = ({heading,text,backgroundImage}:any) => {
  return (
    <div>
        <h1>{heading}</h1>
        <p>{text}</p>
        <Image src={backgroundImage.url} width={backgroundImage.width} height={backgroundImage.height} alt={backgroundImage.alt}/>
    </div>
  )
}

export default Hero