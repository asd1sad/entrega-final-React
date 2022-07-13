import { useState } from 'react'
import { useCartContext } from '../../Context/CartContext'
import { Navigate } from 'react-router-dom'
import { collection ,getDocs ,addDoc , doc, writeBatch, query , where , documentId, DocumentReference } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { Formulario } from './Formulario,'
// console.log('sizeDelPedido:') 
// const sizeDelPedido = itemToUpdate.size.toLowerCase()
// console.log(sizeDelPedido)                               //retorna size del pedido 

// console.log('opcionesDelSizeStock:')  
// const opcionesDelSizeStock = doc.data().stock
// console.log(opcionesDelSizeStock.s)                    //retorna opciones de size stock

// sizeDelPedido == opcionesDelSizeStock.s ? console.log('true') : console.log('false')

    export const Checkout = () => {
                
        const { cart , totalPrice, emptyCart } = useCartContext()
        
        const [orderId, setOrderId] = useState(null)
         
        const generarOrden = async (values) => {
            
        const orden = {
            buyer: values,
            items: cart.map(({id, cantidad, size, nombre, precio}) => ({id, cantidad , size, nombre, precio})),
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
                //   pruebo a ver que es el stock
            console.log(doc.data().stock)
            
            if (itemToUpdate.size.toLowerCase()  === 'x' &&  doc.data().stock.s  >= 0) {
                
                    batch.update(doc.ref, {
                        stock: doc.data().stock.s - itemToUpdate.cantidad
                    })
        
                } else {
                    outOfStock.push(itemToUpdate)
                    console.log('no funciona')
                 }
            // }
        })
        // !!
 
        if (outOfStock.length === 0) { 
            addDoc(ordenesRef, orden)
            .then((doc) => {
                batch.commit()
                setOrderId(doc.id)
                emptyCart()
            })          
        } else {
            // console.log(outOfStock)
            // console.log('no stocke')
            // alert(`Item sin stock: ${outOfStock}`)
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












// productos.docs.forEach((doc) => {
//     const itemToUpdate = cart.find(prod => prod.id === doc.id)
//     //! accede al stock
//     // console.log(doc.data().stock) 
//     //! accede al stock size l
//     // console.log(doc.data().stock.l) 

        
// })
// !!!!!!!!!!!!
// console.log('hola')
// !!!!!!!!!!!!