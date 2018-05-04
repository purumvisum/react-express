import { call, put, select, takeEvery, all } from 'redux-saga/effects';
import { getTodos, setTodos } from '../actions/todos';

function* onGetTodos() {
    const todosList = yield call(getTodosApi);
    yield put(setTodos(todosList));
}

function getTodosApi () {
    return fetch('http://localhost:5000/api/todos')
        .then(res => {
            return res.json();
        })
        .then(todos => {
            console.log(todos)
            return todos
        })
}


export default function* saga() {
    yield all([
        takeEvery(getTodos, onGetTodos)
    ]);
}
