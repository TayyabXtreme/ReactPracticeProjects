import React from 'react'

const Card = ({name,description}) => {
  return (
    <div className='w-1/5 h-64 bg-purple-600 flex justify-center items-center flex-col'>
        <h1>{name}</h1>
        <h4>{description}</h4>
    </div>
  )
}

export default Card