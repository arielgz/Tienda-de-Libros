
import { libros } from "../data/libros";


const infoDeLibros = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(libros);
        
        }, [3000]);
    });

}

export const vertodos = {infoDeLibros};