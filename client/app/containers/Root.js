import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import Todos from "./Todos";

export const store = configureStore();


const Root = () => (
    <Provider store={store}>
        <div>
            <p> Your Todos </p>
            <Todos/>
        </div>
    </Provider>
);
export default Root;
