//Desestructuracion o Asignacion Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};
/*console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);*/


//esto nos permite simplificar las cosas es decir: 
//lo que estamos haciendo es que creamos una constante que extrae lo que esta dentro de las llaves {nombre} del objeto "persona"

const { nombre, edad, clave } = persona; 
console.log(nombre);
console.log(edad);
console.log(clave);

//esta es otra forma de hacerlo
/*const retornaPersona = (usuario) => {
    const { edad, clave, nombre,} = usuario;

    console.log (edad, clave, nombre);
}
retornaPersona(persona);*/

//tambien se puede hacer asi:
/*const retornaPersona = ({ nombre, edad, clave }) => {
    console.log (nombre, edad, clave);
}
retornaPersona(persona);*/

//o tambien asi
const Context = ({nombre, edad, clave}) => {
    return {
        nombreclave: clave,
        anios: edad,
        latlng: {
            lat: 13.3455,
            lng: -12.44455,
        }
    }
}
const { nombreclave, anios, latlng } = Context ( persona );
console.log(nombreclave, anios);
console.log(latlng);
// las palabras "use" y "set" estan reservadas y solo se puede usar en momento especificos