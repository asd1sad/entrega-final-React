import { useCartContext } from "../../Context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'


export const CartItem = () => {
    
    const { cart, removeItem } = useCartContext()

    return(
         cart.map((item) => (
                    <div key={item.id} className="my-2">
                        <h5>{item.nombre}</h5>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Talle {item.size}</p> 
                        <h6>Precio: ${item.precio * item.cantidad}</h6>
                        <button onClick={ () => removeItem(item.id) } className="btn btn-danger"><BsFillTrashFill/></button>
                        <hr/>
                    </div>
    ))
    )
}

// maneja el stock ahora