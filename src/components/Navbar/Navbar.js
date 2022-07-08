import './Navbar.scss'
import { GiIceBomb } from "react-icons/gi";
import { GiKitchenKnives } from "react-icons/gi";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
 
export const Navbar = () => {

 
    return (
        <header className="header">
                <div className='header_container'>

                  <Link to={"/"}><h1 className='header_logo'>s<GiIceBomb/>ldy<GiKitchenKnives/>ar</h1></Link>
                
                        <nav className='header_navbar'>
                                <Link to={'/categoria/remeras'} className="header_navLink">REMERAS</Link>
                                <Link to={'/categoria/pantalones'} className="header_navLink">pantalones</Link>
                                <Link to={'/categoria/extras'} className="header_navLink">extras</Link>
                        </nav>

                  <CartWidget/>
                </div>

        </header>
    )
}






