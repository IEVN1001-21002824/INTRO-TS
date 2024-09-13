
export class Area{
    public base:number;
    public altura:number;
    public radio:number;
    constructor(a:number, r:number, b:number = 0){
        this.altura=a;
        this.base=b;
        this.radio=r;
    }
    AreaTriangulo(): number{
        return (this.altura*this.base)/2;
    }
    AreaCirculo(): number{
        return Math.PI*this.radio*this.radio;
    }
    AreaCuadrado(): number {
        return this.base * this.base;
    }     
}
const triangulo = new Area(10, 5, 0);
console.log(`Área del triángulo:`, triangulo.AreaTriangulo()); 

const cuadrado = new Area(4,5,0);
console.log(`Área del cuadrado:`, cuadrado.AreaCuadrado());  

const circulo = new Area(0,0,3);
console.log(`Área del círculo:`, circulo.AreaCirculo()); 