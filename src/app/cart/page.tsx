
import React from 'react'
import CartItems from "../Componentx/CartItems"

export default function page(items : number) {
  return (
    
    <CartItems key={items}/>

  )
}