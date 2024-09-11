interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    year:number;
}

const reproductor:Reproductor={
    volumen:50,
    segundo:30,
    cancion:"LA VIDA ES UN SUELO",
    detalles:{
        autor:"Fernando rojas",
        year:1500
    }

}

const{volumen, segundo, cancion, detalles}=reproductor;
const{autor, year}=detalles;


console.log(`El volumen actual es: ${volumen}`)
console.log(`Los segundos son: ${segundo}`)
console.log(`La cancion es: ${cancion}`)
console.log(`El cantante es: ${autor}`)
console.log(`El año es: ${year}`)

const dbz:string[]=['Goku', 'Majinbu', 'Babidy', 'Freezer']
console.log(`Personaje 1 ${dbz[0]}`)
console.log(`Personaje 2 ${dbz[1]}`)
console.log(`Personaje 3 ${dbz[2]}`)
console.log(`Personaje 4 ${dbz[3]}`)

const[a,,b,c]=dbz;
console.log(`Personaje 1: ${a}`)
console.log(`Personaje 2: ${b}`)
console.log(`Personaje 3: ${c}`)