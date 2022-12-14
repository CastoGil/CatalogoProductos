import { useEffect, useState } from "react";
import "./ItemCount.css"
import Button from 'react-bootstrap/Button';


export default function ItemCount( {initial, stock, onAdd }) {
    const [counter, setCounter]= useState(initial);

    const decrement = () => setCounter(counter - 1);
    const increase = () => setCounter(counter + 1);

    useEffect(() =>{
        setCounter(parseInt(initial))},[initial]
    )

    return (
        <div className="cajaPadre">
            <div className="cajaContador">
              
                <span className="contador">{counter}</span>
             <div>
                 <Button disabled={counter <= 1} onClick={decrement} variant="primary">-</Button>{' '}
                    <Button disabled={counter >= stock}  onClick={increase} variant="primary">+</Button>{' '}
             </div>
                <div className="AgregarCarrito">
                     <Button disabled={stock <= 0} onClick={()=> onAdd (counter)} variant="danger">Agregar al Carrito <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                     </svg></Button>
                </div>
         </div>
        </div>
       
    )
}



//Imagen Contador/////////////////////////////////
 //<div>
// <p className="titulo">Notebook Asus</p>
//<img className="imagen" src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2017/12/279123-mejores-programas-gratis-windows.jpg?itok=PZ2VxJZs"></img>
// </div>
// <p className="texto">Cantidad</p>