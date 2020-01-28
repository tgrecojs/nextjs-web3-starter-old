import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { reducer } from '../Features/Deck/reducer';
import { userAuthReducer } from '../Features/Auth/reducer';
// import rootSaga from './sagas';

import createSagaMiddleware from '@redux-saga/core';

export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  AUTHORIZE_USER: 'USER_AUTH'
};

// ACTIONS
export const serverRenderClock = () => {
  return { type: actionTypes.TICK, light: false, ts: Date.now() };
};
export const startClock = () => {
  return { type: actionTypes.TICK, light: true, ts: Date.now() };
};

export const incrementCount = () => {
  return { type: actionTypes.INCREMENT };
};

export const decrementCount = () => {
  return { type: actionTypes.DECREMENT };
};

export const resetCount = () => {
  return { type: actionTypes.RESET };
};

// const logger = ({ getState }) => {
//   return next => action => {
//     console.log(
//       '___EQRC_Redux_Logger___ ### New Dispatch Function Called',
//       action
//     );
//     console.group('STATE ##### ___BEFORE_ACTON_UPDATE___');
//     console.log(getState());
//     console.groupEnd();
//     const returnValue = next(action);
//     console.group('STATE ##### ___AFTER_ACTON_UPDATE___');
//     console.log(getState());
//     console.groupEnd();
//     return returnValue;
//   };
// };

export function initializeStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const rootReducer = combineReducers({
    cardDeckState: reducer,
    userState: userAuthReducer
  });
  return {
    ...createStore(rootReducer, initialState, applyMiddleware(logger))
  };
}

// export default  = (initialState) => {
//   const sagaMiddleware = createSagaMiddleWare();
//   return {
//     ...createStore(mainReducer, initialState, applyMiddleware(sagaMiddleware, logger)),
//     runSaga: sagaMiddleware.run(rootSaga)
//   };
// };
