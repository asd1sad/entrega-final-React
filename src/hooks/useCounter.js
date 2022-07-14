import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../Context/CartContext'

 
export const useCounter = ( [max, min= 0] ) => {
  
    // const { counter, setCounter } = useContext(CartContext)
    
    const [counter , setCounter ] = useState(1)

    const increment = () => {
        counter < max && setCounter( counter + 1)
    }
    const restar = () => {
        counter > min && setCounter( counter - 1)
    }
    const decrement = {
        onClick: restar,
        className: `btn mx-1 ${counter === 0 ? 'btn-outline-danger' : 'btn-outline-primary'} ${counter === 0 ? 'min-value' : ''}`,
        disabled: counter === 1
    }
   
      
    return ({
        counter,
        increment,
        decrement,
    })
}











































// import { useState } from "react"
// // import ItemDetail from "../components/ItemDetail/ItemDetail"


// export const useCounter = ( initial = 0, max) => {

//     // const { max } = ItemDetail
//     const [ counter, setCounter ] = useState(initial)

    

//     const increment = () =>  {

//         counter < max && setCounter (counter + 1)
            
      
        
//     }
 
 

//     return   {
//         increment
//     }
        
  
  
// }