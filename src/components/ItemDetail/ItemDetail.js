import { ItemCount } from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { useCounter } from '../../hooks/useCounter'
import { useSize } from "../../hooks/useSize";
import {  doc, getDocs , collection} from "firebase/firestore";
import { db } from '../../firebase/config'

const ItemDetail = ( {item} ) => {


    const { addItem, isInCart } = useContext(CartContext)
    

//   const  productosRef = collection (db, 'productos')
//   getDocs(productosRef)
//     .then((resp) => {
//         const newItems = resp.docs.map((doc) => doc.data())
    
//         console.log(newItems[8].stock)
   
//     })
 
// logicas en custom hook
    const { counter, increment , decrement } = useCounter(0 , item.stock, 0)
    // const { s, m , l } = useSize()

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }
    
    const handleAgregar = () => {
        const itemToCart = { 
            ...item,
            cantidad: counter
        }

        addItem(itemToCart)
    }
    return (
            <div>
                <h2>{item.nombre}</h2>
                <img src={item.img} alt={item.nombre}/>
                <p>{item.desc}</p>
                <h4>Precio: ${item.precio}</h4> 
 
                {/* {
                       (item.stock === 0) ?
                       ''
                        :
                        <>
                           <div className="sort_box">
                               <label htmlFor="sort-by" className="sort_by"> TALLE </label>
                               <select id="sort-by">
                                   <option 
                                   onClick={ s }
                                   >S
                                   </option>

                                    <option
                                     onClick={ m }
                                    >M
                                    </option>

                                   <option
                                     onClick={ l }
                                    >L
                                    </option>  
                                  
                               </select>
                            </div>
                        </>       */}
                 {/* }   */}
   

                <hr/>
                {
                        isInCart(item.id)
                        ?   <Link to='/cart' className='btn btn-success my-3'>Terminar mi compra</Link>
                        :
                            <ItemCount
                            increment={increment}
                            decrement={decrement} 
                            onAdd={handleAgregar} 
                            counter={counter}
                            max={item.stock}
                            />           
                }
 

                <br/>
                <button onClick={handleVolver}>VOLVER</button> 
               {/* { console.log(a) }   */}
            </div>
    )
}

export default ItemDetail