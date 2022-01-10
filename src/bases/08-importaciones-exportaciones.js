//Find y Fliter

//para poder importar un archivo, primero debemos exportar el archivo desde el cual deseamos (heroes), escribimos 
//imp y el auto completado nos ayuda a escribir el import, agregamos la direccion del archivo y luego agregamos el nombre
//del archivo dentro de {}
//sino podemos escribir el nombre del archivo "heroes" y luego el autocompletado nos ayudaria, sino aparece solo hay que
//cerrar el archivo que queremos importar y volver a abrirlo
//para exportar el archivo, vamos abajo del todo y escribimos "export default heores;" despues de default va el nombre del archivo
import  heroes from "../data/heroes";

//console.log(owners);

//la funcion "find" funciona como un call back es decir, hace un barrido del archivo "heroes" para que regrese los archivos

//hay diferentes formas de resolver este problema con el "find", esta es la forma mas simplificada 
const getHeroebyid = ( id ) => heroes.find( ( heroes ) => heroes.id === id );
console.log( getHeroebyid( 2 ) );

//const getHeroebyowner = ( owner ) => heroes.filter( ( heroes ) => heroes.owner === owner );
//console.log( getHeroebyowner ('DC') );

export {
    heroes as default,
    getHeroebyid, 
    //getHeroebyowner
}