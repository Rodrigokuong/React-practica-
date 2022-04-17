console.log('Pipo');

const initialState = [{
    id:1,
    todo: 'Comprar Pan',
    done: false
}];

const todoReducer = ( state = initialState , action) => {
    
    if( action?.type === 'agregar'){
        return [...state, action.payload];
    }

    return state;

}

let todos = todoReducer();

//no usar push en React porque muta el estado 

//Como agregar un nuevo elemento o todo al state (useReducer)
//Primero creamos un nuevo todo que contenga la informacion que nostros queremos agregar al estado

const newTodo = [{
    id:2,
    todo: 'Comprar Leche',
    done: false
}];

//Para poder agregarle valores al estado(state) necesitamos usar una "Accion"(action) y mandarle el objeto en este caso ('newTodo')
const action = {
    type: 'agregar',
    payload: newTodo
}

//No debemos mandar el objeto directamente en el todoReducer, se manda la accion 
todos = todoReducer( todos, action )


console.log(todos);