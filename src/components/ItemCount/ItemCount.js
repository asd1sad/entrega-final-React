import './ItemCount.scss'
import { NoStock } from './NoStock'
 
export const ItemCount = ( {increment, decrement, onAdd, counter, max} ) => {

    if (max === 0) return <NoStock/>      

    return (
        
        <section className='cantidadProductos'>

            <button 
            {...decrement}>
                -
            </button>

            <p>{counter}</p>
 
            <button 
            onClick={increment}
            className={`btn mx 1 ${counter === max ? 'btn-outline-danger' : 'btn-outline-primary'}`}
            disabled={counter === max}
             >
                +
            </button>

            <button  disabled={counter === 0} className='btn btn-success' onClick={onAdd}>Agregar al carrito</button>

        </section>
    )
}

