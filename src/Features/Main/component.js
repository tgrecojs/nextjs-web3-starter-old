import Game from '../Home/component';
import withPage from '../../shared/HOCs/withPage';
import Layout from '../../shared/Layout/Wrapper';

const Deck = () => (
  <Layout>
    <Game />
  </Layout>
);

export default withPage(Deck);
