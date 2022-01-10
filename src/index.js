//Operador condicional terniario
//es una manera corta de hacer una desicion 

//esta seria una forma de hacerlo, esta forma es correcta pero hay otra forma de resolverlo
const activo = true;

/*let mensaje = '';

if ( activo ){
    mensaje = ' activo ';
}
else{
    mensaje = ' inactivo ';
}
*/

//esta es otra forma, tambien es correcta y mas simple 
//const mensaje = ( activo ) ? ' activo ' : ' inactivo '; esto funciona como un if "?" es por asi decirlo la condificon 
// tambien se puede hacer asi "const mensaje = ( activo === true ) ? ' activo ' : ' inactivo ';" 
//const mensaje = ( activo ) ? ' activo ' : null;


/* const activo = true;

const mensaje = ( activo ) ? ' activo ' : ' inactivo ';

console.log(mensaje); */

//esto tambien funciona como un if es una manera corta y facil de mantener
// "&&" esto significa and, funciona tambien como condicion
// este metodo nos sirve por si queremos mostrar algo 
//el tener "!activo" es como decir que activo es falso
const mensaje = activo && 'pipo';
console.log(mensaje);








