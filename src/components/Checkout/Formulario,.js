import { Formik } from 'formik'
import * as Yup from 'yup';


export const Formulario = ({generarOrden}) => {

    const schema = Yup.object().shape({
        nombre: Yup.string()
                    .required('Este campo es obligatorio')
                    .min(4, 'El nombre es demasiado corto')
                    .max(30, 'Máximo 30 caracteres'),
                    email: Yup.string()
                    .required('Este campo es obligatorio')
                    .email('Formato de email inválido'),
        direccion: Yup.string()
                    .required('Este campo es obligatorio')
                    .min(4, 'La dirección es demasiado corta')
                    .max(30, 'Máximo 30 caracteres'),
    })

    return(
        
        <Formik
        initialValues={ {
            nombre: '',
            email: '',
            direccion: ''
        } }
        onSubmit= { generarOrden }
        validationSchema={ schema}
        >
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                        <input
                            value={formik.values.nombre}
                            name='nombre'
                            onChange={formik.handleChange}
                            type={'text'}
                            placeholder='Tu nombre'
                            className='form-control my-2'
                        />
                        {formik.errors.nombre && <p className='alert alert-danger'>{formik.errors.nombre}</p>}
                        <input
                            value={formik.values.email}
                            name='email'
                            onChange={formik.handleChange}
                            type={'text'}
                            placeholder='Tu email'
                            className='form-control my-2'
                        />
                        {formik.errors.email && <p className='alert alert-danger'>{formik.errors.email}</p>}
                        <input
                            value={formik.values.direccion}
                            name='direccion'
                            onChange={formik.handleChange}
                            type={'text'}
                            placeholder='Tu direccion'
                            className='form-control my-2'
                        />
                        {formik.errors.direccion && <p className='alert alert-danger'>{formik.errors.direccion}</p>}

                <button type='submit btn btn-primary'>Submit</button>

            </form>
            )}  
    </Formik>     
    )
}