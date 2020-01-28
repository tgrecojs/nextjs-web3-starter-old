import { describe } from 'riteway';
import M from 'immutable-ext';
import deckState, {
  dealCard,
  reducer,
  setCurrentCard,
  setDeck,
  getCurrentCard,
  getDeck,
  shuffleCards,
  resetScore
} from './reducer';
import { createDeck, shuffle } from '../shared/utils';

describe(`cardDealerReducer () `, async (assert, f) => {
  const initial = reducer(undefined);
  const testDeck = shuffle(createDeck());
  const [first, ...rest] = testDeck;

  const setup = reducer(initial, setDeck(testDeck));

  assert({
    given: 'setDeck(array)',
    should: `update our state's'deck' property to hold its input`,
    actual: setup.deck.length,
    expected: 52
  });

  assert({
    given: 'setDeck(array)',
    should: `update state to hold object representing a full deck of cards`,
    actual: setup.deck.toString() === createDeck().toString(),
    expected: true
  });

  assert({
    given: 'dealCard action',
    should: 'update score property to equal input',
    actual:
      [dealCard(10), dealCard(3), dealCard(10)].reduce(reducer, setup).score ===
      23,
    expected: true
  });
  const output = [dealCard(10), dealCard(3), dealCard(10)].reduce(
    reducer,
    setup
  );
  assert({
    given: 'shuffleCars()',
    should: 'return a deck of 52 cards',
    actual: reducer(output, shuffleCards()),
    expected: true
  });

  // assert({
  //   given: 'dealCard()',
  //   should: `update deck array & current card`,
  //   actual: [dealCard(), dealCard(), dealCard()].reduce(reducer, getSetup),
  //   expected: 52
  // });
});
