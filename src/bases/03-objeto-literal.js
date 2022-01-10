//Objetos Literales
const persona = {
    nombre: 'Tony',//esto es una llave, para llamar la variable es "persona.llave", tambien es necesario dejar una "," al final de haber creado la llave 
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad:'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321,
    }
//tambien se le pueden añadir funciones, objetos 
};
//cuando creamos una variable asi se la denomina como un (objeto)

console.log( persona );
const persona2 = {...persona};//es mejor hacer un clon de esta manera para no tener problemas mas adelante(...persona) nos permite hacer un clon con todos los objetos
console.log(persona2);//estamos copiando la referencia 
persona2.nombre = 'Peter';

//tambien podemos usar un "console.table(persona);" al igual que el de abajo, nos permite ver las propiedades de nuestro objeto
//asi creariamos un nuevo objeto, que contendria a nuestra variable "persona" (es otra forma de imprimir este objeto) siempre despues de console.log van parentecis, luego lo demas ya sea variable u objeto console.log ({persona}); 