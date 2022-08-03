import Item from "../Item/item";
import "./ItemList.css"

const ItemList =({data=[]})=>{
    return(
        data.map(dat => 
        <Item key={dat.id} info={dat}></Item>
        )
        
    )
}
export default ItemList;