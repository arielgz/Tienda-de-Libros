import "../VerTodos/Styles.css"
const { useState } = require("react");

const VerTodos = () => {

    const [mostrarLibros, setMostrarLibros] = useState([]);

    return (
        <>
        <div className="card-container">
            <div className="card-content">
                <div className="card-img"> 
                </div>
                    <div className="card-autor">
                        <span></span>
                    </div>
                    <div className="card-price">
                        <span></span>
                    </div>
                    <div className="card-btn">
                        <button>Ver Detalle</button>
                    </div>
            </div>
        </div>
        </>
    )

}