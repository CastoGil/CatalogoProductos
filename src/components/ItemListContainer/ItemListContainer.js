import ItemCount from "../contador/ItemCount";
import dataFetch from "../../Data/Data";
import ItemList from "../ItemList/ItemList";
import React ,{useEffect, useState} from "react";
import "./ItemListContainer.css"

function ItemListContainer(electro) {
    const [data, setData]=useState([])
   
    useEffect(()=>{
        dataFetch
        .then((resp) => setData(resp))
        .catch(err => console.log(err))
        
    },[])

    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades`)
    }

    return(
        <div>
             <h1> 
            {electro.texto}
            </h1>
            <div className="lista-productos">
            <ItemList data={data}>
            </ItemList>
            <ItemCount initial={1} stock={5} onAdd={onAdd}></ItemCount>
            </div>
        </div>
       
    )
    
}
export default ItemListContainer;
//