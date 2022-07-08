import { useCartContext } from "../../Context/CartContext"
import { EmptyCart } from "./EmptyCart"
import { Link } from "react-router-dom"
import { CartItem } from "./CartItem"

export const Cart = () => {

    const { cart, totalPrice, emptyCart } = useCartContext()
     
    if (cart.length === 0) return <EmptyCart/>

    return (
        <div>   
            <h2>Tu Compra</h2>
            <hr/>

           <CartItem/>
                
            <h4>TOTAL: ${totalPrice()}</h4>

            <button onClick={emptyCart} className='btn btn-danger'>Vaciar carrito</button>
            <Link to='/checkout' className="btn btn-success">Checkout</Link>
        </div>
    )
}

 

