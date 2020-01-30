import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { compose } from 'ramda';
import { setBalance, getBalance } from '../Auth/reducer';

const Profile = ({ accounts, web3Api }) => {
  const dispatch = useDispatch();
  const onSetBalance = x => dispatch(setBalance(x));

  const balance = useSelector(state => state.userState.balance);

  console.log(' web3 ____ POFILE', web3Api);
  useEffect(() => {
    web3Api.eth.getBalance(accounts[0]).then(res => {
      console.log('getBalance ###', res);
      dispatch(setBalance(web3Api.utils.fromWei(res).concat()));
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('balane', balance);
  return (
    <div>
      <h2>Signed In! : {accounts[0]}</h2>
      <h4>Balance :{balance}</h4>
    </div>
  );
};

export default Profile;
