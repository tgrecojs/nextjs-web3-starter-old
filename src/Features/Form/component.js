import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form as Wrapper, Button } from '../../shared/styled';

const Form = ({ sendTransaction }) => {
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');
  const setter = set => e => {
    const { target } = e;
    const { value } = target;
    set(value);
  };
  return (
    <Wrapper>
      <div>
        <label>Recipent Address</label>
        <input value={to} type="text" maxLength={50} onChange={setter(setTo)} />
      </div>
      <div>
        <label>Transaction Amount (ETH)</label>
        <input
          value={amount}
          type="text"
          maxLength="50"
          onChange={setter(setAmount)}
        />
      </div>
      <Button
        onClick={e => {
          e.preventDefault();
          return sendTransaction({ to, amount });
        }}
      >
        Send Transaction
      </Button>
    </Wrapper>
  );
};

Form.propTypes = {
  sendTransaction: PropTypes.func
};

export default Form;
