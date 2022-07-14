import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { ItemSizeAndCount } from "../ItemSizeAndCount/ItemSizeAndCount";
 

const ItemDetail = ( {item} ) => {
 
    const { isInCart } = useContext(CartContext)
  
    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }
     
    return (
            <div>
                <h2>{item.nombre}</h2>
                <img src={item.img} alt={item.nombre}/>
                <p>{item.desc}</p>
                <h4>Precio: ${item.precio}</h4> 
  
                <hr/>
                {
                        isInCart(item.id)
                        ?   <Link to='/cart' className='btn btn-success my-3'>Terminar mi compra</Link>
                        :
                            <ItemSizeAndCount
                            item = {item}
                            />           
                }
  
                <br/>
                <button onClick={handleVolver}>VOLVER</button> 
    
            </div>
    )
}

export default ItemDetail