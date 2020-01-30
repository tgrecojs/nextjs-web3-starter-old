import { compose } from 'redux';
import { connect } from 'react-redux';
import withRedux from './withConnect';
import withCards from './withCards';
import { setUserId } from '../../Features/Auth/reducer';
export default Component =>
  compose(
    connect(null, {
      onSetUserId: setUserId
    })
    //withCards
  )(Component);
