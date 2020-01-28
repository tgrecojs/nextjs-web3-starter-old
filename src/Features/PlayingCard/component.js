import { D, S, H, C } from '../../shared/utils';

const generateBgColors = (type = '') => {
  switch (type) {
    case D:
      return 'red';
    case S:
      return '#000';
    case H:
      return 'pink';
    case C:
      return 'blue';
    default:
      return 'teal';
  }
};

const PlayingCard = ({
  suit = '',
  rank = '',
  inDeck = true,
  title = 'default card title',
  value = ''
}) => (
  <div
    style={{
      width: 300,
      height: 275,
      backgroundColor: generateBgColors(suit)
    }}
  >
    <h4>{suit}</h4>
    <h4>{rank}</h4>
    <p>{value}</p>
  </div>
);

export default PlayingCard;
