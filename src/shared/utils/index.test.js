import { describe } from 'riteway';
import M from 'immutable-ext';
import { randomNumber, createCard, createDeck, shuffle, getDeck } from './';
const { List } = M;

let cardsTotal = [
  'AH',
  '2H',
  '3H',
  '4H',
  '5H',
  '6H',
  '7H',
  '8H',
  '9H',
  '10H',
  'JH',
  'QH',
  'KH',
  'AD',
  '2D',
  '3D',
  '4D',
  '5D',
  '6D',
  '7D',
  '8D',
  '9D',
  '10D',
  'JD',
  'QD',
  'KD',
  'AS',
  '2S',
  '3S',
  '4S',
  '5S',
  '6S',
  '7S',
  '8S',
  '9S',
  '10S',
  'JS',
  'QS',
  'KS',
  'AC',
  '2C',
  '3C',
  '4C',
  '5C',
  '6C',
  '7C',
  '8C',
  '9C',
  '10C',
  'JC',
  'QC',
  'KC'
];

const rank = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Q', 'K', 'A'];
const suit = ['DIAMONDS', 'SPADES', 'CLUBS', 'HEARTS'];

function* dealCardGenerator(state = { deck: [] }) {
  const card = yield getDeck(state);
  console.log('card dealt ### ', card);
  return card;
}

describe('createDeck function', async assert => {
  const deck = createDeck();
  const shuffled = () =>
    List.of(x => shuffle(x))
      .ap(List(deck))
      .fold([]);

  assert({
    given: 'no arguments',
    should: 'create a deck with a 52 items',
    actual: deck.length,
    expected: 52
  });

  assert({
    given: 'no arguments',
    should: 'create a deck with a 52 items',
    actual: shuffle(deck),
    expected: deck[0]
  });
});

describe('randomNumber () ', async assert => {
  const deck = createDeck();
  const start = 0;
  const end = deck.length - 1;
  const output = randomNumber(start, end);
  assert({
    given: `start of ${start} and end of ${end}`,
    should: 'generate a number within these bounds',
    actual: [output].every(x => x < end),
    expected: true
  });

  assert({
    given: 'start of 0 and end of 52',
    should: 'generate a number no less than 0',
    actual: [output].every(x => x > start),
    expected: true
  });
});

describe('createCard function', async assert => {
  const card = createCard();
  const { suit, value, inDeck } = card;
  assert({
    given: 'no arguments',
    should: 'create an object with a value',
    actual: value,
    expected: `1-SPADES`
  });
  assert({
    given: 'no arguments',
    should: 'create an object with a suit',
    actual: suit,
    expected: 'SPADES'
  });

  assert({
    given: 'no arguments',
    should: 'create an object with a inDeck property',
    actual: inDeck,
    expected: true
  });
});
