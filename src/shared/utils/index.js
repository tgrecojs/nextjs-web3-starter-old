import M from 'immutable-ext';
import cuid from 'cuid';

const range = (n = 10) => Array.from({ length: n }, (v, i) => i);
const { List } = M;

const logEvent = e => {
  console.log(`event ::`, e);
  console.log('event.target.value ::', e.target.value);
  return e.target.value;
};

export { logEvent };
const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', '♕', '♔', 'A'];
const suit = ['DIAMONDS', 'SPADES', 'CLUBS', 'HEARTS'];
const [D, S, C, H] = suit;

const createCardScore = rank => (typeof rank === 'string' ? 10 : rank);

const createCard = ({ suit = 'SPADES', rank = 1 } = {}) => ({
  id: cuid(),
  suit,
  rank,
  value: `${rank}-${suit}`,
  inDeck: true,
  score: createCardScore(rank)
});

const logX = label => x => {
  console.log(`${label}::`, x);
  return x;
};

const getDeck = x => x.deck;

const add = x => y => x + y;

const randomNumber = (start, end) =>
  Math.round(Math.random() * (end - start) + start);

const shuffle = array => {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const createDeck = () =>
  List.of(x => y => createCard({ id: cuid(), suit: x, rank: y, inDeck: true }))
    .ap(List(suit))
    .ap(List(rank))
    .fold([]);

const shuffleDeck = x => shuffle(x);
export {
  D,
  H,
  S,
  C,
  add,
  createCard,
  randomNumber,
  createDeck,
  shuffle,
  shuffleDeck,
  range
};
