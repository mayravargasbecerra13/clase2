import './App.css';
import NavbarComponent from './componentes/navbar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemCountComponent from './componentes/ItemCount'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Checkout from './componentes/Checkout';
import Productosprovider from './componentes/Productosprovider';






function App() {




  return (
  
    <BrowserRouter>

      <NavbarComponent />
      
     <Productosprovider>
     <Routes>
      
      <Route path='/productos' element={ <ItemListContainer/>}/>
      <Route path='/carrito' element = { <ItemListContainer greeting={'Carrito'} />}/>
      <Route path='/contador' element ={<ItemCountComponent props={[]}/>}/>
      <Route path= '/elegante' element = {<ItemListContainer category="Elegante"/>}/>
      <Route path= '/deportivo' element = {<ItemListContainer category="Deportivo"/>}/>
      <Route path='/checkout' element={ <Checkout/> } />
   
     
      
      {/* <Route path="*" element={<Navigate to="/"/>}/> */}
      
    </Routes>
     </Productosprovider>
      
      
    </BrowserRouter>
    
  );
}

export default App;
