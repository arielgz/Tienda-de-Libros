import './App.css';
import Navbar from './Components/Navbar';
import { CartWidget } from './Components/CartWidget/Index';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
     <Navbar/>
    <ItemListContainer greeting={"Bienvenidos a la Tienda Online"}/>
    </>
   
      );
}

export default App;
