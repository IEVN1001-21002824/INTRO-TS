class Persona3{
    protected nombre:string;
    protected edad:number;
    constructor(a:string,b:number){
        this.nombre=a;
        this.edad=b;
    }
    imprimir(){
        console.log(`Nombre ${this.nombre} Edad: ${this.edad}`);
    }
}
class Empleado extends Persona3{
    private sueldo:number;
    constructor(a:string,b:number,sueldo:number){
        super(a,b);
        this.sueldo=sueldo;
    }
    imprimir():void {
        console.log(`Sueldo ${this.sueldo}`);
    }
    pagaImpuestos(){
        if(this.sueldo>5000)
        console.log(`${this.nombre} debe pagar impuestos Sueldo`);
        else
        console.log(`${this.nombre} no debe pagar impuestos`);

    }
}
const persona4=new Persona3('Juan' , 44);
persona4.imprimir();
const empleado1=new Empleado('Ana',22,7000);
empleado1.imprimir();
empleado1.pagaImpuestos();