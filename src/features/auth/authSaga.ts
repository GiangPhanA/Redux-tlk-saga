import { PayloadAction } from "@reduxjs/toolkit";
import { push } from "connected-react-router";
import { call, delay, fork, put, take } from "redux-saga/effects";
import { authActions,LoginPayload,} from "./authSlice";

function* handleLogin(payload: LoginPayload) {
    console.log('Handle Login', payload);
    try {
        yield delay(1000);
    
        localStorage.setItem('access_token', 'abc123');
        yield put(
          authActions.loginSuccess({
            id: 1,
            name: 'GiangPhan',
          })
        );
    
        // redirect to admin page
        yield put(push('/admin'));
        
      } catch (error) {
        yield put(authActions.loginFailed(error.message));
      }

}

function* handleLogout() {
    console.log('Handle out')
    localStorage.removeItem('access_token')
    // redirect to login page
    yield put(push('/login'));

}

function* watchLoginFlow() {
    while (true) {
        const isLoggedIn = Boolean(localStorage.getItem('access_token'));
        if(!isLoggedIn) {
            const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
            yield fork(handleLogin, action.payload);

        }
    
        yield take(authActions.logout.type);
        yield call(handleLogout);

    }


}

export default function* authSaga() {
    yield fork(watchLoginFlow);
    console.log('Login Saga')
  }