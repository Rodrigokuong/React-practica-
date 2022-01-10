console.log('hola mundo'); /*nos permite ver algo en consola*/
//Variables y Constantes(no usar "var" para crear variables)

const nombre = 'Rodrigo'; //son variables que no cambian o que no se van a renombrar
let apellido = 'Funes'; // son variables que pueden cambiar 

let valorDado= 5;
valorDado=4;//no es necesario escribir de nuevo "let" para poder cambiar el valor de las variables
 console.log(nombre,apellido,valorDado);

 if (true){
     let valorDado=6;//este valor existe solo en este scope(en el if)
     console.log(valorDado);
 }

 console.log(valorDado);//ya no vale 6 porque solo existe en el if 