import { connect } from 'react-redux';

const createDeck = () => ({
  type: 'CREATE_DECK'
});

export default Component =>
  connect(
    state => ({
      ...state
    }),
    { onCreateDeck: createDeck }
  )(Component);
