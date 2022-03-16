import React from "react";
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
      </div>
    </div>
    </nav>
    )
}