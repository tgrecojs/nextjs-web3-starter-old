import DeckOfCards from '../Deck/component';
import { shuffleCards, dealCard, endGame } from '../Deck/reducer';
import { compose } from 'ramda';
import Scoreboard from '../Scoreboard/component';
import { FINISH_GAME } from '../Deck/sagas';
import Card from '../PlayingCard/component';
import Layout from '../Styled';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import Profile from '../Profile/component';

const StyledDiv = styled.div`
  ${tw`text-sm text-red hover:text-blue`};
`;

const Home = () => {
  const state = useSelector(state => state);
  const {
    cardDeckState: { deck: data, score, currentCard },
    userState: { userId, balance }
  } = state;
  const dispatch = useDispatch();
  console.log({ state });
  return (
    <div>
      <Scoreboard score={score} player={userId[0]} />
      <StyledDiv>
        {currentCard && <Card {...currentCard} score={score} />}
        {/* <DeckOfCards currentDeck={currentDeck} /> */}
        {data.length < 1 ? (
          <>
            <button onClick={() => dispatch(endGame())}>
              Click to Record Results
            </button>
            <button onClick={() => dispatch(endGame())}>
              Start a new game
            </button>
          </>
        ) : (
          <button
            disabled={data.length < 1 ? true : false}
            onClick={() => dispatch(dealCard(currentCard))}
          >
            Deal
          </button>
        )}
      </StyledDiv>
      <h2>Deck of Cards Pushups</h2>
      <button onClick={() => dispatch(endGame())}>End Game</button>
      <button onClick={() => dispatch(shuffleCards())}>Shuffle Cards</button>
    </div>
  );
};
export default Home;
