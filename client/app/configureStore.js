
import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers/index';
import rootSaga from './sagas/index';
import createSagaMiddleware from 'redux-saga'

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(
            {
                serialize: true
            }
        ),
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(rootSaga)


    return store
};

export default configureStore;
