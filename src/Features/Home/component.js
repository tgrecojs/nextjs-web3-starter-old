import { shuffleCards, dealCard, endGame } from '../Deck/reducer';
import Scoreboard from '../Scoreboard/component';
import Card from '../PlayingCard/component';
import PastGames from '../PastGames/component';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { BtnDefault } from '../../shared/Styled';

const StyledDiv = styled.div`
  ${tw`text-sm text-red hover:text-blue`};
`;

const Home = () => {
  const state = useSelector(state => state);
  const {
    cardDeckState: { deck: data, score, currentCard, isStarted, pastGames },
    userState: { userId, balance }
  } = state;
  const dispatch = useDispatch();
  console.log({ state });
  return (
    <>
      <h2>Deck of Cards Pushups</h2>
      {/* <DeckOfCards currentDeck={currentDeck} /> */}
      {data.length === 0 ? (
        <>
          <h2>Final Card!</h2>
          <Card {...currentCard} score={score} />
          <BtnDefault onClick={() => dispatch(endGame(userId[0]))}>
            Click to Record Results
          </BtnDefault>
        </>
      ) : (
          <StyledDiv>
            <Scoreboard score={score} player={userId[0]} />
            {currentCard && (
              <>
                <Card {...currentCard} score={score} />
                <BtnDefault
                  onClick={() => dispatch(dealCard(currentCard))}
                >
                  Deal
              </BtnDefault>
                <BtnDefault onClick={() => dispatch(endGame(userId[0]))}>
                  End Game
              </BtnDefault>
              </>
            )}
          </StyledDiv>
        )}
      {!isStarted && (
        <BtnDefault onClick={() => dispatch(shuffleCards())}>
          Start Game
        </BtnDefault>
      )}
      <hr />
      {pastGames.length > 0 && <PastGames pastGames={pastGames} />}
    </>
  );
};
export default Home;
