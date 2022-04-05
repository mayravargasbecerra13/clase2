import React from "react";
import { Link } from "react-router-dom";
import CardtWidgetComponent from './CardtWidget';


export default function NavbarComponent ()  {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">WebShip</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
      
        <ul className="navbar-nav">
          <li>
            <CardtWidgetComponent/>
            Cart
          </li>
        </ul>
        <nav className="tres-enlaces">
      <Link to="/contacto" className="enlaces">Contacto</Link>
      <Link to="/nosotros" className="enlaces">Nosotros</Link>
      {/*<Link to="/cuenta" className="enlaces">Crea tu cuenta</Link>
     <Link to="/ingresa" className="enlaces">Ingresa</Link>
      <Link to="/compras" className="enlaces">Mis compras</Link>*/}
    </nav>
      
      </div>
    </div>
   
    </nav>
    )
    
}