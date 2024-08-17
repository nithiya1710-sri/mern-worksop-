import React from 'react'
import Car from './Car'

const Garage = () => {
    const brand ="Ford"
    const color ="red"
    return (
    <>
    <h1>who lives in my garage?</h1>
    <Car brand={brand} color={color}/>
    </>
  )
}

export default Garage