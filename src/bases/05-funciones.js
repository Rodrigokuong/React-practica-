// Funciones en JS


//es mejor no hacer funciones de este tipo ya que podemos cometer errores como el de abajo
/*function saludar ( nombre ) {
    return ` Hola, ${ nombre } `
}
saludar = 30;
console.log(saludar ('pipo'));
console.log(saludar);
dentro de esta funcion tenemos un error el cual seria la funcion, por que?
porque saludar(la funcion) contiene un valor, que es el "hola.${nombre}"
si por ende yo quisiera que "saludar" tuviera otro valor no es posible
sale un warning porque saludar tiene un valor de 30
va a funcionar pero, saludar pierde su valor de `hola,${nombre}`
para tener en si 30 
*/



/*const saludar= function ( nombre ) {
      return `Hola, ${ nombre }`
}
console.log( saludar );
*/

//Funcion Flecha
const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`
}
console.log(saludar2 ('Pipo2'));

//esto es exactamente igual a lo de arriba solo que es mas simple
const saludar3 = ( nombre ) => `Hola, ${ nombre }`
console.log(saludar3 ('Pipo3'));

//esto tambien nos sirve
const saludar4 = () => `Hola mundo`;
console.log(saludar4()); 


/*const getUser = () =>{
    return{
        uid: 'ABC123',
        username: 'El_Papi1402'
    }
}
const user = getUser();
console.log(getUser());*/
//se lo podria usar sin return, quitando el return, llaves{} del return y agregando parentecis sin el return es decir 
/*const getUser = () => ({
    uid:'ABC123',
    username: 'El_Papi1402'
}) /*esto se convierte en un objeto */

//Tarea


//3. Pruebas

/*function getUsuarioActivo(nombre) {
    return {
        uid:'ABC123',
        username: 'El_Papi1402'
    }    
}
const usuarioActivo = getUsuarioActivo('Rodrigo');
console.log(usuarioActivo);*/

//1. Transformar a una funcion de Flecha
const getUsuarioActivo2 = (nombre) => {
    return{
    uid:'ABC123',
    username: 'El_Papi1402'
}
}
console.log(getUsuarioActivo2);

//2. Tiene que retornar un objeto implicito 
const getUsuarioActivo3 = () => ({
    uid:'ABC523',
    username: 'El_Papi1402',
    })
console.log(getUsuarioActivo3);