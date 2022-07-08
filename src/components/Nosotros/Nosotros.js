import './Nosotros.scss';

// dato/componente de presentacion (cuestiones visuales, no logicas)

// lo que viene por parametro es siempre un objeto = titulo,content

export const Nosotros = ( {titulo = 'chavez x defecto', content = 'wey x defecto'} ) => {

// desestructurando
    // const {titulo,content} = props

    return (
            <section className="nosotros">
                <h2 className="nosotros_title">{titulo}</h2>
                <p>{content}</p>
            </section>
    ) 
}


 
