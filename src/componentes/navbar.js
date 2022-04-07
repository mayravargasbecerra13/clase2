import React from "react";
import { Link } from "react-router-dom";
import CardtWidgetComponent from './CardtWidget';


export default function NavbarComponent ()  {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <div className="navbar-brand" >WebShip</div>
      
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
       <nav className="tres-enlaces">
      <Link to="/contacto" className="enlaces">Contacto</Link>
      <Link to="/nosotros" className="enlaces">Nosotros</Link>
      <CardtWidgetComponent/>
    
    </nav>
      
      </div>
    </div>
   
    </nav>
    )
    
}