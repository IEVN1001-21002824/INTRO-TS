import { Producto, calcularIVA2} from "./05-destructurar-funciones";


const carrito:Producto[]=[
    {
        desc:'Telefono1',
        precio:1000
    },
    {
        desc:'Telefono2',
        precio:2000
    },
    {
        desc:'Telefono3',
        precio:87
    },
]
const [Total3, iva3]=calcularIVA2(carrito);
console.log(`Total ${Total3}`);
console.log(`IVA:${iva3}`)