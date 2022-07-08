import { useAuthContext} from '../../Context/AuthContext'


export const UserInfo = () =>{

    const {auth,logout} = useAuthContext()

    return (
        <div className='container d-flex justify-content-between py-2'>   
            <p>Bienvenido {auth.userId}</p>
            <button onClick={logout}className='btn btn-danger'>LOGOUT</button>
        </div>
    )
} 