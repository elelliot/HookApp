import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link to="#" className="navbar-brand" >useContext</Link>
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {/*Link es lo mismo que NavLink solo que este puede establecer una clase si el url coincide con el path*/}
                    <NavLink exact activeClassName="active" to="/" className="nav-link" >Home</NavLink>
                    <NavLink exact activeClassName="active" to="/about" className="nav-link" >About</NavLink>
                    <NavLink exact activeClassName="active" to="/login" className="nav-link" >Login</NavLink>
                </div>
            </div>
        </nav>
        // <nav>
        //     <ul>
        //         <li>
        //             {/* Los Links funcionan más rápido que un tag <a href>, necesitamos tener react router instalado en el proyecto y no hará refresh cuando entremos a un link*/}
        //             <Link to="/"> Home </Link>
        //         </li>
        //         <li>
        //             <Link to="/about"> About </Link>
        //         </li>
        //         <li>
        //             <Link to="/login"> Login </Link>
        //         </li>
                
        //     </ul>
        // </nav>
    )
}
