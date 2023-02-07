import { useState } from "react"

 export const Button = () => {

    const [contador, setContador] = useState(0);

    return (
        <button onClick={() => setContador(contador +1)}>Contador {contador} </button>

    )
}
