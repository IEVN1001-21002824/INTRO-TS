import {Area} from "./area";

class Volumen extends Area {
    constructor(base:number, altura:number){
        super(altura, base);
    }
    VolumenPrisma() : number{
        return this.AreaTriangulo()*this.base;
    }
    VolumenCilindro() : number{
        return Math.PI*this.radio*this.radio*this.altura;
    }
    Volumenpiramide() : number{
        return this.base*this.altura*this.AreaTriangulo()/6;
    }
}
const cuadrado = new Volumen(0,3);
console.log(`El volumen del prisma es, ${cuadrado.VolumenPrisma()}`);

const triangulo = new Volumen(8,3);
console.log(`El volumen de la piramide es, ${triangulo.Volumenpiramide()}`);

const circulo = new Volumen(7,6);
console.log(`El volumen del Cilindro es, ${circulo.VolumenCilindro()}`);
