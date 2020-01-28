import autodux, { assign, id } from 'autodux';
import { getDate } from '../../shared/utils/date';
import cuid from 'cuid';

const {
  reducer: userAuthReducer,
  initial,
  actions: { setUserId, setUserName, setBalance },
  selectors: { getUserId, getUserName, getBalance }
} = autodux({
  slice: 'user',
  initial: {
    userId: [],
    userName: '',
    lastLogin: '',
    balance: '0'
  }
});

export {
  userAuthReducer,
  initial,
  getBalance,
  getUserId,
  getUserName,
  setBalance,
  setUserId,
  setUserName
};
