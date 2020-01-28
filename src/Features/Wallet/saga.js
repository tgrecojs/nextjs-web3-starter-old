import {
  call,
  put,
  all,
  takeLatest,
  take,
  delay,
  race,
  select
} from 'redux-saga/effects';
import {
  fetchWallet,
  reportError,
  reportSuccess,
  handleSuccess,
  handleError
} from './reducer';
import {
  setWalletAddress,
  getWalletAddress,
  setBalance,
  setWeb3
} from '../wallet-two/reducer';
import { initializeWeb3, getWalletBalance } from '../shared/api/eth';

export function* fetchBalanceGenerator() {
  try {
    console.log('inside wallet balance gen');
    const wallet = yield select(getWalletAddress);
    console.log({ wallet });
    const balance = yield call(getWalletBalance, wallet);
    console.log({ balance });
    yield put(setBalance(balance));
  } catch (e) {
    return new Error('issue updatng balance', e);
  }
}

export function* fetchTokenSaga() {
  try {
    const token = yield call(initializeWeb3);
    yield put(setWeb3(window.web3));
    yield put(reportSuccess(token));
    yield put(setWalletAddress(token));
    yield put(handleSuccess());
  } catch (error) {
    yield put(reportError(error));
    yield put(handleError());
  }
}

export function* initalizeWebthre() {
  const token = yield call(initializeWeb3);
  yield put(setWeb3(window.web3));
  yield put(reportSuccess(token));
}

function* watchFetchWallet() {
  yield takeLatest(fetchWallet().type, fetchTokenSaga);
}

export function* watchFetchBalance() {
  yield takeLatest(handleSuccess().type, fetchBalanceGenerator);
}

export default watchFetchWallet;
