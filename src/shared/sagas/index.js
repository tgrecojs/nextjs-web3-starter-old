import { takeLatest } from 'redux-saga/effects';
function* apiGen() {
  yield 2 + 2;
}

export default function* rootSaga() {
  yield takeLatest('someAction', apiGen);
}
