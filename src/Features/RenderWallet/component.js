import { useState, useEffect, Fragment } from 'react';
import { fetchWalletInfo } from '../../shared/API/blockchain';
import WalletDetails from '../WalletDetails/component';
import { Button } from '../Styled';

const RenderWallet = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [walletData, setWalletData] = useState(null);
  const [walletError, setWalletError] = useState({});
  const showWallet = () => setIsShowing(!isShowing);

  useEffect(() => {
    fetchWalletInfo()()
      .then(response => {
        setWalletData(response);
        setIsShowing(false);
      })
      .catch(err => {
        return setWalletError(err);
      });
  }, []);

  return !walletData ? null : !isShowing ? (
    <Button onClick={showWallet}>Show Wallet Info</Button>
  ) : (
      <WalletDetails
        {...walletData}
        onHideWallet={() => setIsShowing(!isShowing)}
      />
    );
};

export default RenderWallet;
