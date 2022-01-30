import {all} from 'redux-saga/effects';
import authSaga from '../features/auth/authSaga';
// import counterSaga from 'features/counter/counterSaga';
import counterSaga from '../features/counter/counterSaga';

// function * helloSaga() {
//     console.log('hello Saga nek');
// }

export default function* rootSaga() {
    // yield all([counterSaga(), authSaga(), dashboardSaga(), studentSaga(), citySaga()]);
    console.log('root Saga');
    yield all([
        counterSaga(),
        authSaga(),
    ])
}