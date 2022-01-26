import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery } from "redux-saga/effects";
import {increment} from './counterSlice';

export function* log(action: PayloadAction) {
    console.log('log', action)
    
}

export default function* counterSaga(){
    console.log('counterSaga');
    // Lang nghe toan bo log dung yield takeEvery('*', log)
    // yield takeEvery('*', log)

    
    // yield takeEvery('counter/increment', log)
    yield takeEvery(increment().type, log);
}