import './App.css';
import Navbar from './Components/Navbar';
import { CartWidget } from './Components/CartWidget/Index';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from './Components/Button';
import { ItemCount } from './Components/ItemCount';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <>

    <BrowserRouter>

    <Routes>
    
    <Route path='/Ver Todos' element={<Navbar/>}/> 

    <Navbar/>
    <ItemListContainer greeting={"Bienvenidos a la Tienda Online"}/>
    <Button/>
    <ItemCount/>

    </Routes>
    </BrowserRouter>
    </>
   
      );
}

export default App;
