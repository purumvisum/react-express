import React from 'react';
import Paper from 'material-ui/Paper';
import ToDoItem from "./ToDoItem";
import MessageText from "./Message";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
    margin: '40px auto',
    width: 390,
    padding: 20
};

function ToDoList({todos, emptyText, onTodoClick, onTodoRemove}) {

    return (
        <div>
            <MuiThemeProvider>
                <Paper style={style} zDepth={3}>
                    { todos.length ? (
                        todos.map((todo) =>
                            <ToDoItem
                                id={todo.id}
                                text={todo.text}
                                done={todo.done}
                                onToggle={() => onTodoClick(todo.id)}
                                onTodoRemove={() => onTodoRemove(todo.id)}
                            />)
                    ) : (
                        <MessageText text={emptyText}/>
                    )}
                </Paper>
            </MuiThemeProvider>
        </div>
    )
}

export default ToDoList