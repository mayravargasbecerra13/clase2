import { CartDash } from 'react-bootstrap-icons';
import {Link} from "react-router-dom"




export default function CardtWidgetComponent () {
    
    
    return (
      
        <Link to='/productos' className="cart-widget">
            <CartDash/>
        </Link>
        

    )
}