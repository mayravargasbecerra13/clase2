import './App.css';
import NavbarComponent from './componentes/navbar';
import ItemListContainer from './componentes/itemListContainer';
import ItemCountComponent from './componentes/ItemCount'
import ItemList from './componentes/ItemList';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>

      <NavbarComponent />
      
     
      <Routes>
      
        <Route path='/productos' element={ <ItemList/>}/>
        <Route path='/carrito' element = { <ItemListContainer greeting={'Carrito'} />}/>
        <Route path='/category/:categoryId' element = {<ItemList/>}/>
        <Route path='/contador' element ={<ItemCountComponent props={[]}/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
