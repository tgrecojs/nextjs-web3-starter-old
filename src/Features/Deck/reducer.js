import autodux, { assign, id } from 'autodux';
import { shuffle, createDeck, add } from '../../shared/utils';
import { getDate } from '../../shared/utils/date';
import cuid from 'cuid';

const INIT_SHUFFLE = 'deckOfCardsState_____INITIALIZE_DOC_SHUFFLE';
const onInitShuffle = () => ({ type: INIT_SHUFFLE });

const onEndGame = {};

const {
  reducer,
  initial,
  slice,
  actions: {
    setCurrentCard,
    updateDeck,
    endGame,
    startGame,
    resetScore,
    setScore,
    shuffleCards,
    dealCard
  },
  selectors: {
    getDeck,
    getCurrentCard,
    getPastCards,
    getLastCard,
    getPastDecks,
    getScore,
    getUserState,
    getState
  }
} = autodux({
  slice: 'deckOfCards',
  initial: {
    id: cuid(),
    deck: shuffle(createDeck()),
    currentCard: '',
    lastCard: '',
    startTime: getDate,
    endTime: '',
    score: 0,
    pastGames: [],
    isStarted: false
  },
  selectors: {
    getState: (_, globalState) => globalState,
    getUserState: (_, { userState }) => userState,
    localState: state => state
  },
  actions: {
    setCurrentCard: assign('currentCard'),
    updateDeck: state => ({ ...state, currentCard: state.deck[0] }),
    initializeDealCard: id,
    setScore: ({ score, ...rest }, payload) => ({
      ...rest,
      score: score + payload
    }),
    shuffleCards: state => {
      console.log('shuffling cards!_________', state);
      const deck = shuffle(createDeck());
      return {
        ...state,
        isStarted: true,
        deck: deck.slice(1),
        currentCard: deck[0],
        pastGames: state.pastGames
      };
    },
    endGame: (
      { deck, id, startTime, score, currentCard, pastGames },
      userId
    ) => {
      console.log({ score, currentCard });
      return {
        ...initial,
        pastGames: pastGames.concat({
          id,
          user: userId,
          startTime,
          endTime: getDate,
          score: score + currentCard.score,
          cardsRemaining: deck.length
        })
      };
    },
    dealCard: ({ score, currentCard, deck, ...rest }) => ({
      ...rest,
      lastCard: currentCard,
      currentCard: deck[0],
      score: add(score)(currentCard.score),
      deck: deck.slice(1)
    })
  }
});

export {
  reducer,
  initial,
  endGame,
  resetScore,
  getUserState,
  startGame,
  slice,
  setCurrentCard,
  updateDeck,
  setScore,
  shuffleCards,
  dealCard,
  getDeck,
  getCurrentCard,
  getPastCards,
  getLastCard,
  getPastDecks,
  getScore,
  getState,
  INIT_SHUFFLE,
  onInitShuffle
};
