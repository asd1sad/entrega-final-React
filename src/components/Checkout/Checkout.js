import { useState } from 'react'
import { useCartContext } from '../../Context/CartContext'
import { Navigate } from 'react-router-dom'
import { collection ,getDocs ,addDoc , writeBatch, query , where , documentId } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { Formulario } from './Formulario,'
 
    
    export const Checkout = () => {
                
        const { cart , totalPrice, emptyCart } = useCartContext()
        
        const [orderId, setOrderId] = useState(null)
         
        const generarOrden = async (values) => {
            
        const orden = {
            buyer: values,
            items: cart.map(({id, cantidad, nombre, precio}) => ({id, cantidad , nombre, precio})),
            total: totalPrice()
        }
        
        const batch = writeBatch(db)
        const ordenesRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'productos') 
        const q = query(productosRef, where(documentId(), 'in', cart.map(item => item.id)))
        
        const outOfStock = []
        const productos = await getDocs(q)
        
        productos.docs.forEach((doc) => {
            const itemToUpdate = cart.find(prod => prod.id === doc.id)
            
            if ((doc.data().stock - itemToUpdate.cantidad) >= 0) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.cantidad
                })
            } else {
                outOfStock.push(itemToUpdate)
            }
        })
        
        if (outOfStock.length === 0) {
            addDoc(ordenesRef, orden)
            .then((doc) => {
                batch.commit()
                setOrderId(doc.id)
                emptyCart()
            })          
        } else {
            console.log(outOfStock)
            alert(`Item sin stock: ${outOfStock}`)
            // alert('Item sin stock:' ,outOfStock)
        }
    }
    
    if (orderId) {
        return (
            <div className='container my-5'>
                <h2>Gracias por su compra</h2>
                <hr/>
                <p>Su numero de orden es : {orderId}</p>
            </div>
        )
    }  
    
    if (cart.length === 0) {
        return <Navigate to='/'/>
    }
      
    return (
        <div>
            <h2>Checkout</h2>
            <hr/>

            <Formulario generarOrden={generarOrden}/>
            
            <button className='btn btn-danger' onClick={emptyCart}>Cancelar mi compra</button>
        </div>
    )
} 


