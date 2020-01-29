import { D, S, H, C } from '../../shared/utils';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const generateBgColors = (type = '') => {
  switch (type) {
    case D:
      return 'border-red-600';
    case S:
      return 'border-gray-300';
    case H:
      return 'border-red-300';
    case C:
      return 'border-gray-600';
    default:
      return 'border-red-300';
  }
};
const StyledPlayingCard = styled.div`
  ${tw`max-w-sm rounded overflow-hidden shadow-lg
  px-6 py-4 bg-purple-300 text-center`}
`;

const PlayingCard = ({
  suit = '',
  rank = '',
  title = 'default card title',
  value = ''
}) => (
  <StyledPlayingCard>
    <h1>
      {rank} of {suit}
    </h1>
  </StyledPlayingCard>
);

PlayingCard.propTypes = {
  inDeck: PropTypes.bool,
  rank: PropTypes.string,
  suit: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string
};

export default PlayingCard;
