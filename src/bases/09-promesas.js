//Promesas

import { getHeroebyid } from "./bases/08-importaciones-exportaciones";



/*const promesa = new Promise( (resolve, reject) =>{
    setTimeout(() => {
        resolve();
    }, 2000);
});

promesa.then( () =>{
    console.log('Then de la promesa');
})*/

//tarea 
//1. importar getHerobyid(2)

/*const promesa = new Promise( (resolve, reject ) =>{
    setTimeout(() => {
        const heroes = getHeroebyid(2);
        resolve ( heroes );
    }, 2000);
})
promesa.then( (heroes) =>{
    console.log('heroe', heroes); 
})

//.catch( err => console.warn( err ) );*/

const getHerobyidasync = ( id ) => {
    return new Promise ( ( resolve, reject )=>{
        setTimeout(() => {
            const p1 = getHeroebyid (id);
            if ( p1 ){
                resolve(p1);
            }
            else{
                reject( 'No se pudo encontrar el heroe' );
            }
        }, 2000);
    });
}

getHerobyidasync(10).then(console.log);
getHerobyidasync.catch(err => console.warn( err ));




