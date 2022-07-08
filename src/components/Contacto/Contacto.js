import { Formik } from "formik"
import * as Yup from 'yup'


const schema = Yup.object().shape({
    email: Yup.string()
                .required('Este campo es obligatorio')
                .email('Formato de email inválido'),
    mensaje: Yup.string()
                .required('Este campo es obligatorio')
                .min(2,'<3')
})

export const Contacto = () => {
    
    return (

        <div>
             <Formik
                initialValues={ {
                    nombre: '',
                    email: '',
                    direccion: ''
                } }
                onSubmit={ (values) => {
                    console.log(values)
                }}
                validationSchema={schema}
            >
                {(formik) => (
                    <form onSubmit={formik.handleSubmit}>
                        <input
                            value={formik.values.email}
                            name="email"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="email@example.com"
                            className="form-control my-2"
                        />
                        {formik.errors.email && <p className="alert alert-danger">{formik.errors.email}</p>}

                        <input
                            value={formik.values.mensaje}
                            name="mensaje"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="Mensaje"
                            className="form-control my-2"
                        />
                        {formik.errors.mensaje && <p className="alert alert-danger">{formik.errors.mensaje}</p>}

                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                )}
            </Formik>
        </div>
        )
}
 
