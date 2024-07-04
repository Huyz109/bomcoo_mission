// const initState = [
//     {id: 1, name: 'Learn React', completed: false, priority: 'High'},
//     {id: 2, name: 'Learn Redux', completed: true, priority: 'Medium'},
//     {id: 3, name: 'Learn Javascript', completed: false, priority: 'Low'},
// ]

// const todoReducer = (state = initState, action) => {
//     switch (action.type){
//         case 'todoList/addTodo': 
//             return [...state, action.payload]
//         case 'todoList/toggleTodoStatus':
//             return state.map(todo => 
//                 todo.id === action.payload ? {...todo, completed: !todo.completed} : todo);
//         default: 
//             return state
//     }
// }

// export default todoReducer;
import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todoList',
    initialState: [
        {id: 1, name: 'Learn React', completed: false, priority: 'High'},
        {id: 2, name: 'Learn Redux', completed: true, priority: 'Medium'},
        {id: 3, name: 'Learn Javascript', completed: false, priority: 'Low'},
    ],
    reducers: {
        addTodo: (state, action) => {
            // mutation function IMMER
            state.push(action.payload)
        }, // => {type: 'filter/searchFilterChange'}
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.filter(todo => todo.id = action.payload);
            if(currentTodo) {
                currentTodo.completed = !currentTodo.completed;
            }
        },
    }
})