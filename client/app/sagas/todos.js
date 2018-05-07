import { call, put, select, takeEvery, all } from 'redux-saga/effects';
import {
    addTodo,
    getTodos,
    setTodos,
    removeTodo,
    doneTodo } from '../actions/todos';

import { todosListSelector } from '../selectors/todos';

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

function* onAddTodo(action) {
    console.log('action.payload', action.payload)
    yield call(addTodoApi, action.payload);
}

function addTodoApi (text) {
    return fetch(
        `http://localhost:5000/api/todo/`,
        {
            method: "POST",
            headers: new Headers({ "Content-Type": "application/json" }),
            body:  JSON.stringify({text})
        })
        .then(res => {
            return res.json();
        })
        .then(todos => {
            return todos
        })
}


function* onDoneTodo(action) {
    const todos = yield select(state => todosListSelector(state));

    const itemForUpdate = todos.find(item => {
        return item._id === action.payload
    })

    let updatedItemSchema = {
        done: !itemForUpdate.done,
        text: itemForUpdate.text
    }
   // const updatedItemSchema = Object.assign(itemForUpdate, done: !itemForUpdate.done;

    console.warn('updatedItemSchema', updatedItemSchema)

    const id = action.payload
    console.log(action.payload)
    console.log(action)
    yield call(updateTodoApi, id, updatedItemSchema);
}

function updateTodoApi (id, item) {
    // console.log('id', id)
    const data = {
        id,
        item
    }
    return fetch(
        `http://localhost:5000/api/todo/`,
        {
            method: "PUT",
            headers: new Headers({ "Content-Type": "application/json" }),
            body :  JSON.stringify(data)
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
        takeEvery(doneTodo, onDoneTodo),
    ]);
}
