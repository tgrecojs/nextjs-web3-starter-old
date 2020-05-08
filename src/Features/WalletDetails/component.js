import { string, func, number } from 'prop-types';
import { WalletCard, Button } from '../Styled';

const WalletDetails = ({
  first_seen_receiving = '',
  first_seen_spending = '',
  last_seen_spending = '',
  last_seen_receiving = '',
  spent_usd = 0,
  transaction_count = 0,
  received_usd = 0,
  onHideWallet
}) => (
    <WalletCard>
      <p>
        First seen spending: <b>{first_seen_spending}</b>
      </p>
      <p>
        First seen receiving: <b>{first_seen_receiving}</b>
      </p>
      <p>
        Last seen spending: <b>{last_seen_spending}</b>
      </p>
      <p>
        Last seen receiving: <b>{last_seen_receiving}</b>
      </p>
      <p>
        Transaction Count: <b>{transaction_count} </b>
      </p>
      <p>
        Spent (USD): <b>{spent_usd}</b>
      </p>
      <p>
        Received (USD): <b>{received_usd}</b>
      </p>
      <Button onClick={onHideWallet}>Hide Wallet</Button>
    </WalletCard>
  );

WalletDetails.propTypes = {
  first_seen_receiving: string,
  first_seen_spending: string,
  last_seen_receiving: string,
  last_seen_spending: string,
  onHideWallet: func,
  received_usd: number,
  spent_usd: number,
  transaction_count: number
};

export default WalletDetails;
