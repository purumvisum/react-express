import { call, put, select, takeEvery, all } from 'redux-saga/effects';
import { addTodo, getTodos, setTodos, removeTodo } from '../actions/todos';

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

function* onAddTodo() {
    yield call(addTodoApi);
}

function addTodoApi () {
    return fetch(
        'http://localhost:5000/api/todo',
        {
            method: "PUT",
            body: ''
        })
        .then(res => {
            return res.json();
        })
        .then(todos => {
            console.log(todos)
            return todos
        })
}


function* onRemoveTodo(action) {
    const id = action.payload
    console.log(action.payload)
    console.log(action)
    yield call(removeTodoApi, id);
}

function removeTodoApi (id) {
    // console.log('id', id)
    return fetch(
        `http://localhost:5000/api/todo/${id}`,
        {
            method: "DELETE"
        })
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
        takeEvery(getTodos, onGetTodos),
        takeEvery(addTodo, onAddTodo),
        takeEvery(removeTodo, onRemoveTodo),
    ]);
}
