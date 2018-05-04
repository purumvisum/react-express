import { all } from 'redux-saga/effects';
import todosSaga from './todos';

function* rootSaga() {
    yield all([
        todosSaga()
    ]);
}

export default rootSaga;
