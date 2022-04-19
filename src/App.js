import './App.css';
import NavbarComponent from './componentes/navbar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemCountComponent from './componentes/ItemCount'
import ItemList from './componentes/ItemList';
import Contacto from './componentes/Contacto';
import Nosotros from './componentes/Nosotros';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemDetailContainer';




function App() {




  return (
  
    <BrowserRouter>

      <NavbarComponent />
      
     
      <Routes>
      
        <Route path='/productos' element={ <ItemList/>}/>
        <Route path='/carrito' element = { <ItemListContainer greeting={'Carrito'} />}/>
        <Route path='/contador' element ={<ItemCountComponent props={[]}/>}/>
        <Route path= '/elegante' element = {<Contacto/>}/>
        <Route path= '/deportivo' element = {<Nosotros/>}/>
        
        <Route path="*" element={<Navigate to="/"/>}/>
        
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
