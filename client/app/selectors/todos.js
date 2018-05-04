import { createSelector } from 'reselect'

export const todosListSelector = state => {
    return state.todos.todos;
}