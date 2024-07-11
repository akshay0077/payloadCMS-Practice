import React from 'react'

const TwoColumn = ({heading,image,text,direction}:any) => {
  return (
    <div>
        <h1>{heading}</h1>
        <p>{text}</p>
    </div>
  )
}

export default TwoColumn