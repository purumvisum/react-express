import React from 'react';

//actions
// import {addToDo} from '../actions/actions';

// design
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { connect } from 'react-redux'

function ToDoForm({ addTodo }) {
    const styles = {
        center: {
            margin: '0 auto',
            width: 320
        },
    };
    let textInput = null;
    return (
        <div  style={styles.center}>
            <MuiThemeProvider>
                <TextField
                    floatingLabelText="Enter Todo"
                    ref={(input) => {
                        textInput = input;
                    }}
                />
            </MuiThemeProvider>
            <MuiThemeProvider>
                <FloatingActionButton mini={true}
                                      onClick={() => {
                                          textInput.input.value && (addTodo(textInput.input.value));
                                          textInput.input.value = "";}}
                >
                    <ContentAdd />
                </FloatingActionButton>
            </MuiThemeProvider>
        </div>
    );
}

ToDoForm = connect()(ToDoForm);

export default ToDoForm