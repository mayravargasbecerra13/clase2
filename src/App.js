import './App.css';
import NavbarComponent from './componentes/navbar';
import ItemListContainer from './componentes/itemListContainer';
import ItemCountComponent from './componentes/ItemCount'
import ItemList from './componentes/ItemList';


function App() {
  return (
    <>
      <NavbarComponent />
      <ItemListContainer greeting={'Carrito'} />
      <ItemCountComponent props={[]}/>
      <ItemList/>
      
    </>
  );
}

export default App;
