import { useEffect, useRef, useState } from 'react';
import D1 from '../Features/Home/component';
import { setUserId } from '../Features/Auth/reducer';
import useFortmatic from '../shared/hooks/useFortmatic';
import withPage from './../shared/HOCs/withPage';
import Profile from '../Features/Profile/component';
import Layout from '../shared/Layout/Wrapper';
const Deck = ({ onSetUserId }) => {
  const { accounts, signOut, signIn, web3Ready } = useFortmatic(
    'pk_test_FD0EB9F0796F08AF'
  );
  const [web3Api, setWeb3Api] = useState(null);

  // when component mounts.
  useEffect(() => {
    // We're wrapping a function around this to avoid
    // returning a promise from the effect, which makes
    // React complain.
    signIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // You can also listen for user sign in and sign out
  // and handle it however you like (e.g., Redux action).

  useEffect(() => {
    // you can listen for auth status changes
    // and disptach Redux actions here:

    onSetUserId(accounts);

    web3Ready
      .then(res => {
        setWeb3Api(res);
      })
      .catch(err => {
        console.log('err', err);
        return err;
      });

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accounts]);

  console.log('web3Ready _______', web3Api);

  return web3Api && accounts[0] ? (
    <Layout>
      <Profile web3Api={web3Api.web3} accounts={accounts} />
      <D1 />
    </Layout>
  ) : (
    <>loading</>
  );
};
export default withPage(Deck);
