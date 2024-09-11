export interface Producto{
    desc:string;
    precio:number;
}

const telefono:Producto={
    desc:'tablet N',
    precio:5000
}

const tablet:Producto={
    desc:'Ipad Air',
    precio:1837
}

function calcularIVA(productos:Producto[]):number{
    let total=0;
    productos.forEach((producto)=>{
        total+=producto.precio;
    })
    return total*0.16
}
const articulos1=[telefono,tablet];
const iva1=calcularIVA(articulos1);
console.log(iva1);

export function calcularIVA2(productos: Producto[]): [number, number] {
    let total = 0;
    productos.forEach((producto) => {
        total += producto.precio;
    });
    return [total, total * 0.16];
}

const articulos2=[telefono,tablet];
const [total,iva]=calcularIVA2(articulos1);
console.log(`Total ${total}`)
console.log(`IVA ${iva1}`);