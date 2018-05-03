import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import Customers from './customers';
import Todos from "./Todos";

export const store = configureStore();


const Root = () => (
    <Provider store={store}>
        <div>
            <p> Your Todos </p>
            <Customers/>
            <Todos/>
        </div>
    </Provider>
);
export default Root;
