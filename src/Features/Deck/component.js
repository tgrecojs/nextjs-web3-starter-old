import { logEvent } from '../../shared/utils';
import Card from '../PlayingCard/component';
import cuid from 'cuid';
const Deck = ({ currentDeck = [] }) =>
  currentDeck.length > 0
    ? currentDeck.map(({ id, ...x }) => <Card {...x} key={id} />)
    : 'Game over!';
export default Deck;
