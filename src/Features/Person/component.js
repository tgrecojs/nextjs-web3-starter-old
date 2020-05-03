import { shape, string, func, number } from 'prop-types';
import { FlexCol, Button } from '../../shared/Layout';

const Person = ({
  firstName = { value: '' },
  lastName = { value: '' },
  score = { value: '' },
  index = 0,
  onIncrement
}) => (
  <FlexCol>
    <h2>
      {firstName.value} {lastName.value}
    </h2>
    <span>
      {score.name}: {score.value}
    </span>
    <Button type="button" onClick={() => onIncrement(index)}>
      Increment
    </Button>
  </FlexCol>
);

Person.propTypes = {
  index: number,
  firstName: shape({
    value: string
  }),
  lastName: shape({
    value: string
  }),
  score: shape({
    name: string,
    value: number
  }),
  onIncrement: func
};

export default Person;
