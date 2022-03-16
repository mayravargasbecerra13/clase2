import './App.css';
import NavbarComponent from './componentes/navbar';
import ItemListContainer from './componentes/itemListContainer';

function App() {
  return (
    <>
      <NavbarComponent />
      <ItemListContainer greeting={'Mayra'} />
    </>
  );
}

export default App;
