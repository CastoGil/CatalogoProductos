import "./Item.css"

const Item=({info})=>{
    console.log(info)
    return(
        <div className="contenedor-principal">
            <div>
                <a href="#" className="imgInfo">
                <img className="imagenFondo" src={info.img} alt=''/>
                </a>
             <a href="#" className="titulo-product">
                <p className="title">{info.title}</p>
             </a>
            </div>
            <div className="contenedor-info">
            <p>{info.description}</p>
            <p>${info.price}</p>
            <p className="disponible">Disponible {info.stock}</p>
            </div>
            
        </div>
    )
}
export default Item;
