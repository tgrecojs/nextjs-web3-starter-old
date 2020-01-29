import { useState } from 'react';
import { array } from 'prop-types';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { BtnDefault } from '../../shared/Styled';
const PastGamesWrapper = styled.div`
  ${tw`w-full flex flex-row flex-wrap justify-center`}
`;

const PastGameInfo = styled.div`
  ${tw`p-5 m-5`}
`;

const PastGames = ({ pastGames }) => {
  const [isShowing, setIsShowing] = useState(false);
  const togglePastGames = () => setIsShowing(!isShowing);

  return isShowing ? (
    <>
      <BtnDefault onClick={() => togglePastGames()}>Hide Past Games</BtnDefault>
      <PastGamesWrapper>
        {pastGames.length > 0 &&
          pastGames.map(({ id, score, endTime, cardsRemaining }, iter) => {
            return (
              <PastGameInfo key={id}>
                <h3>Game #{++iter}</h3>
                <h2>Score: {score}</h2>
                <span>{endTime}</span>
              </PastGameInfo>
            );
          })}
      </PastGamesWrapper>
    </>
  ) : (
    <BtnDefault onClick={() => togglePastGames()}>Show Past Games</BtnDefault>
  );
};

PastGames.propTypes = {
  pastGames: array
};

export default PastGames;
