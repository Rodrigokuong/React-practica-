export const todoReducer = ( state = [], action ) => {

    switch ( action.type ) {
        case 'add':
            
            return [...state, action.payload]; 

        case 'delete':
            //esto regresa un nuevo arreglo 
            return state.filter( todo => todo.id !== action.payload );    
    
        default:
            return state;
    }
}