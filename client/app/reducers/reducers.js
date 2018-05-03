import {combineReducers} from 'redux';
import customerReducer from './customers';

export default combineReducers({
    customers: customerReducer
})