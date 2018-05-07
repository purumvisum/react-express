import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/Todos/ToDoVisibleList';
import ToDoForm from '../components/Todos/TodoTextField';
import { bindActionCreators } from 'redux';

import {
    getTodos,
    addTodo,
    removeTodo,
    doneTodo
} from '../actions/todos';
import { todosListSelector } from '../selectors/todos';

class Todos extends Component {

    componentDidMount() {
        this.props.getTodos();
    }

    render() {
        console.warn(this.props.todosList)
        return (
           <div>
               <ToDoForm
                   addTodo = { this.props.addTodo }
               />
               {
                   this.props.todosList && this.props.todosList.length > 0 &&
                   <TodoList
                       todos = { this.props.todosList }
                       emptyText = { 'sdfasdfadsf' }
                       onTodoClick = { this.props.doneTodo }
                       onTodoRemove = { this.props.removeTodo }
                   />
               }
           </div>
        );
    }
}



function bindAction(dispatch) {
    return {
        getTodos: bindActionCreators(getTodos, dispatch),
        addTodo: bindActionCreators(addTodo, dispatch),
        removeTodo: (todo) => dispatch(removeTodo(todo)),
        doneTodo: (todo) => dispatch(doneTodo(todo)),
    };
}

function mapStateToProps(state) {
    return {
        todosList: todosListSelector(state),
    };
}

export default connect(mapStateToProps, bindAction)(Todos);
