const nombre = 'Rodrigo';
const apellido = 'Funes';

//Temple String nos ayuda a simplificar el codigo 
//const nombreCompleto= nombre + ' ' + apellido;
//const saludo = ' hola mundo '; esto es igual a lo que tengo abajo  
const nombreCompleto= ` hola mundo `;
const nombreCompleto=`
${nombre} 
${apellido}
${1+1}
`; //para meter codigo javascript tenemos que usar ``(altgr+comilla) y agregar el signo ($ y {})

function getSaludo(nombre){
    return 'hola' + nombre;
    //se pueden usar funciones tambien, si lo usamos asi y en donde llamamos la variable ${getSaludo(dentro de los parentesis entraria el nombre de la variable)} nos saldria un "undefine" para solucionarlo, solo debemos poner la misma variable que ponemos en la funcion
}

console.log(`Este es un  texto: ${getSaludo( nombre )}`)
console.log(nombreCompleto);//si no me ayuda el autocompletado, solo tenemos que apretar (ctrl+espacio) y deberia de aparecer el autocompletado