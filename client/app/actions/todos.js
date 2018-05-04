import { createAction } from 'redux-actions';

export const getTodos = createAction('[TODO]GET_TODOS');
export const setTodos = createAction('[TODO]SET_TODOS');

export const addTodo = createAction('[TODO]ADD_TODO');
export const removeTodo = createAction('[TODO]REMOVE_TODO');