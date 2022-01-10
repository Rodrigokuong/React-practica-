//Arreglos en js

//esto no se utiliza, solo se utiliza para un valor fijo, nos permite crear un array const arreglo = new Array(100);
// arreglo.push(1) esto no es recomendable usarlo, nos permite agregarle 1 o 2 o 3.... espacios al array

const arreglo=[1,2,3,4];//se utiliza de esta manera y con corchetes 
//para insertar algo al 

let arreglo2 = [...arreglo, 5];
//arreglo2.push( 5 );

//map es una funcion, cada {objeto} tiene prototipo que contiene las funciones
//cada funcion debe de tener un "return" y un nombre dentro de la funcion function(nombre){}

const arreglo3 = arreglo2.map(function (numero) {
    return numero * 2;
});

console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );