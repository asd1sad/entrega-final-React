import { Nosotros } from '../components/Nosotros/Nosotros'
import { Contacto } from '../components/Contacto/Contacto'
import { Navbar } from '../components/Navbar/Navbar'; 
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from '../components/Cart/Cart'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserInfo } from '../components/UserInfo/UserInfo';
import { Checkout } from '../components/Checkout/Checkout';

export const PrivateRoutes = () => {

    return (
        <>
            <Navbar />
                <UserInfo />
                    <Routes>  
                        <Route path='/' element={<ItemListContainer /> } />
                        <Route path='/categoria/:categoryId' element={<ItemListContainer /> } />
                        <Route path='/item/:itemId' element={  <ItemDetailContainer /> } />
                        <Route path='/cart' element={<Cart /> } />
                        <Route path='/checkout' element={<Checkout /> } />
                        <Route path='/nosotros' element={ <Nosotros /> } />
                        <Route path='/contacto' element={ <Contacto /> } />
                        <Route path='*' element={ <Navigate to={'/'}/> } />
                    </Routes>
        </>
    )
}