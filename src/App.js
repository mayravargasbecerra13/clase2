import './App.css';
import NavbarComponent from './componentes/navbar';
import ItemListContainer from './componentes/itemListContainer';
import ItemCountComponent from './componentes/ItemCount'
import ItemList from './componentes/ItemList';
import Contacto from './componentes/Contacto';
import Nosotros from './componentes/Nosotros';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'




function App() {




  return (
  
    <BrowserRouter>

      <NavbarComponent />
      
     
      <Routes>
        <Route path='/productos' element={ <ItemList/>}/>
        <Route path='/carrito' element = { <ItemListContainer greeting={'Carrito'} />}/>
        <Route path='/contador' element ={<ItemCountComponent props={[]}/>}/>
        <Route path= '/contacto' element = {<Contacto/>}/>
        <Route path= '/nosotros' element = {<Nosotros/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
        
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
