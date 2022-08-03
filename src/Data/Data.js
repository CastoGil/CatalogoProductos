const Data=[
    {
        id:1,
        title:"Pc Apple",
        description:"Computadora de Escritorio",
        price:"200000",
        img:"https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        stock:3

    },
    {
        id:2,
        title:"Lapto",
        description:"Notebook Apple",
        price:"150000",
        img:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        stock:2
    },
    {
        id:3,
        title:"Tablet",
        description:"Tablet con camara integrada",
        price:"100000",
        img:"https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        stock:10

    },
    {
        id:4,
        title:"Iphone",
        description:"celular con camara de 48px",
        price:"120000",
        img:"https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=1600",
        stock:5
    },
    {
        id:5,
        title:"Drone Toysky",
        description:"Drone con Camara de Video integrada",
        price:"50000",
        img:"https://images.pexels.com/photos/10772405/pexels-photo-10772405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        stock:3
    },
    {
        id:6,
        title:"Camara Pro-II",
        description:" camara profesional SONY",
        price:"220000",
        img:"https://images.pexels.com/photos/7206213/pexels-photo-7206213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        stock:5
    }
    
]

const dataFetch= new Promise((res,rej)=>{
    let condition=true
    condition ? setTimeout(() => {
        res(Data)
    }, 2000): rej(console.log("No hay informacion"))
})

export default dataFetch;