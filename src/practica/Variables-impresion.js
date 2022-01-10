import React from 'react';

const objeto = () => {

    const objeto2 = {
        nombre: 'Rodrigo',
        edad: 22
    }
    return(
        <>
        <pre>{ JSON.stringify(objeto2 , null , 3)}</pre>
        </>
    )
}

export default objeto;


//impresion de variables en el html

    //no podemos imprimir objetos de esta forma const saludo = { nombre:tony, edad: 45}
    //podemos imprimir numeros, decimales (numeros:123 , decimales:1.22)
    //tambien podemos imprimir arreglos de numeros [1,2,3,4,5,6];
    //esto no puede imprimir valores booleanos es decir "true o false"

    //para imprimir objetos tenemos que hacer lo siguiente 
    //creamos un objeto que contenta datos
    // const objeto = {
    //     nombre: 'Rodrigo',
    //     edad: 22
    // }
    //luego dentro del return, usamos el codigo <pre>{ json.stringify(objeto , null , 3)}</pre>
    //eso nos va a permitir mostrar el objeto, pero como si fuera un codigo, el numero 3 nos determina el espacio

