const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [  , p2 ] = personajes;

//para que javascript detecte que quiero tomar el segundo valor es decir
//p1 = goku 
//p2 = vegeta
//p3 = trunks
//entonces, para tomar el segundo valor necesito una "," al igual que con los demas valores

console.log( p2 );

const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras , numeros);

//Tarea 
//1. el primer valor del arr se llamara nombre
//2. se llamara nombre2

const State = (valor) => {
    return [ valor, () =>{console.log('Hola Mundo')}];
}
const [nombre , Nombre2] = State( 'Goku' ); //se lo pone entre llaves cuadradas "[]" para poder usar "nombre  y nombre2" como objetos 
console.log( nombre );
Nombre2();