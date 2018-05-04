import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/Todos/ToDoVisibleList';
import { bindActionCreators } from 'redux';

import { getTodos } from '../actions/todos';
import { todosListSelector } from '../selectors/todos';

class Todos extends Component {

    componentDidMount() {
        this.props.getTodos();
    }

    render() {
        return (
           <div>
               {
                   this.props.todosList &&
                   <TodoList
                       todos = { this.props.todosList }
                       emptyText = { 'sdfasdfadsf' }
                       onTodoClick = { () => {alert('click')} }
                       onTodoRemove = { () => {alert('remove')} }
                   />
               }
           </div>
        );
    }
}



function bindAction(dispatch) {
    return {
        getTodos: bindActionCreators(getTodos, dispatch)
    };
}

function mapStateToProps(state) {
    return {
        todosList: todosListSelector(state),
    };
}

export default connect(mapStateToProps, bindAction)(Todos);
