import {BsFillCartPlusFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'

 
export const CartWidget = () => {
    // ! el talle tiene que recibir
    const {totalQuantity} = useCartContext()

    return (
        <Link to='/cart' className={`widget ${totalQuantity() === 0 ? 'widget-hidden' : ''}`}>
            <BsFillCartPlusFill/>
            <span>{totalQuantity()}</span>
        </Link>
    )
 
}
 
 
 
