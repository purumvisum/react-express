
import { createStore } from 'redux';

import reducer from './reducers/reducers';
import rootSaga from './saga';

const configureStore = () => {
    return createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(
            {
                serialize: true
            }
        )
    );
};

export default configureStore;
