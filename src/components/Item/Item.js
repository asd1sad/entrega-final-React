import './Item.scss'
import { Link } from 'react-router-dom'
import { useHover } from '../../hooks/useHover'

const Item = ( {item} ) => {

    //! customHook
    const { isHovering , hover , noHover,  } = useHover()

    return (
        <div className="item">
 
            <h2>{item.nombre}</h2>
       
            <section  
                onMouseEnter={ hover } 
                onMouseLeave={ noHover } >
                {
                isHovering ? <img src={item.img} alt={item.nombre}/>:
                             <img src={item.img2} /> 
                            }
            </section>

            <p>{item.desc}</p>
            <h4>Precio: ${item.precio}</h4>
          
            <Link to={`/item/${item.id}`}>
               <button className="btn btn-primary">Click for more</button>
            </Link>
    
        </div>
    )
}

export default Item