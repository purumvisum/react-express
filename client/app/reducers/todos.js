import { handleActions } from 'redux-actions';

import { getTodos, setTodos } from '../actions/todos';

const initialState = {};

export default handleActions({
    [setTodos]: (state, action) => {
        return {
            todos: action.payload
        };
    },
    [getTodos]: (state, action) => {
        return {
            state
        };
    }
}, initialState);
