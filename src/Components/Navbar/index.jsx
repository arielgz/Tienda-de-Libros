import { CartWidget } from "../CartWidget/Index";
import '../Navbar/Styles.css'

const Navbar = () => {
    return (
        <header className="header">
            <a className="Marca" href="#logo">Tienda de Libros</a>
            
            <nav className="links-nav">
                <ul className="list-item">
                    <li className="link-item"><a href="#vertodos">Ver Todos</a></li>
                    <li className="link-item" ><a href="#Novelas">Novelas</a></li>
                    <li className="link-item"><a href="#infantiles">Infantiles</a></li>
                    <li className="link-item"><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
            <div className="cart-container">
                    <a href="#carrito"><CartWidget/></a>
                    <div className="contador">
                    <p className="numero-contador">1</p>
                </div>
                </div>
        </header>
    )
}

export default Navbar;