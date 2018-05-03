import React, { Component } from 'react';
import TodoList from '../components/Todos/ToDoVisibleList'

export default class Todos extends Component {


    render() {
        return (
           <div>
               <TodoList
                   todos = {
                       [{
                           text:"sdfsdFds",
                           done:false,
                           id:"8338196a-6c67-4345-9ad8-f059e2246882"
                       },
                       {
                           text:"sdfsDF",
                           done:false,
                           id:"886e43ea-ca6d-49ae-86be-c85f854e6e44"
                       }]
                   }
                   emptyText = { 'sdfasdfadsf' }
                   onTodoClick = { () => {alert('click')} }
                   onTodoRemove = { () => {alert('remove')} }
               />
           </div>
        );
    }
}
