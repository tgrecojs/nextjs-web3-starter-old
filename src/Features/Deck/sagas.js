import { put, select, call, all, takeLatest } from 'redux-saga/effects';
import { getUserId } from '../Auth/reducer';
import { dealCard, endGame } from './reducer';
const getLatestCard = deck => deck.pop();
const FINISH_GAME = 'FINISH_GAME';

const createNewDeck = (deck = []) => idx =>
  deck.slice(0, idx).concat(deck.slice(idx + 1));

const getCds = state => state.cardDeckState.deck;

function* finishGameGenerator(x) {
  console.log('inside finishGameGen ######-______(card)', card);
  yield put(setScore(x));
  yield shuffleDeckGenerator();
}

export default function* finishGameWatcher() {
  yield takeLatest(FINISH_GAME, finishGameGenerator);
}

function* updateCountGenerator(deck) {
  yield put(setDeck(deck));
}

function* dealCardGenerator() {
  const x = yield select(getCds);
  const currentCard = yield select(state => state.cardDeckState.currentCard);

  console.log('after yield select(getDeck) ########', x);
  console.log('after yield select(getDeck) ######## lastCard', currentCard);
  if (x.length < 1) {
    yield finishGameGenerator(currentCard.score);
  } else {
    yield put(dealCard(currentCard.score));
  }
}

function* shuffleDeckGenerator() {
  yield put(resetScore());
  const [first, ...rest] = yield shuffleFn(createDeck());
  yield put(setDeck(rest));
  yield put(setCurrentCard(first));
}

export {
  FINISH_GAME,
  shuffleDeckGenerator,
  dealCardGenerator,
  finishGameWatcher
};
