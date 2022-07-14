import { useContext, useState } from "react"
import { useParams } from "react-router-dom";
import { getDoc , doc } from "firebase/firestore";
import { db } from '../../firebase/config'
import { CartContext } from "../../Context/CartContext";
import { useCounter } from "../../hooks/useCounter";

export const ItemSizeAndCount = ({item}) => {

    const { addItem } = useContext(CartContext)
    
    const handleAgregar = () => {
        const itemToCart = { 
            ...item,
            cantidad: counter,
            size: size
        }
        
        addItem(itemToCart)
        
    }
    
    const [ size, setSize ] = useState('S')

 

    const handleSize = (e) => {
        setSize(e.target.value)
    }
    
    const [ stock, setStock ] = useState()
    const { itemId } = useParams()
    
    const { counter, increment , decrement} = useCounter([stock, 0])
    
    const docRef = doc(db , 'productos', itemId)
    
    // const a = setValue(size)
    // console.log(a)
    
        if (size === 'L') {
            getDoc(docRef)
            .then((doc) => {
                const newItem = { id:doc.id, ...doc.data()}
                setStock(newItem.stock.l)
            })
            
        } else if (size === 'M') {
            getDoc(docRef)
            .then((doc) => {
                const newItem = { id:doc.id, ...doc.data()}
                setStock(newItem.stock.m)
            })
            
        } else if (size === 'S') {
            getDoc(docRef)
            .then((doc) => {
                const newItem = { id:doc.id, ...doc.data()}
                setStock(newItem.stock.s)   
            })
        }
  

    return (
        <>
            <></>
            {
                (item.stock === 0) ?
                ''
                :
                <> 
                    <label htmlFor="sort-by" className="sort_by"> TALLE </label>
                    <select id="sort-by" onChange={handleSize}>
                            <option value="S">S</option>
                            <option value="M">M </option>
                            <option value="L">L</option>      
                    </select>   

                     
                    <section className='cantidadProductos'>
                
                        <button 
                        {...decrement}>
                            -
                        </button>

                        <p>{counter}</p>
            
                        <button 
                        onClick={increment}
                        className={`btn mx 1 ${counter === stock ? 'btn-outline-danger' : 'btn-outline-primary'}`}
                        disabled={counter === stock}
                        >
                            +
                        </button>

                        <button  disabled={counter === 0} className='btn btn-success' onClick={handleAgregar}>Agregar al carrito</button>

                    </section>
                </>  
                      
            }
        </>
    )
}

// ! pasar el value al cart