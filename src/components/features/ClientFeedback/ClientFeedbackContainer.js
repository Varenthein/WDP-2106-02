import { connect } from 'react-redux';

import ClientFeedback from './ClientFeedback';

import { getAll } from '../../../redux/feedbackRedux.js';
import { getNew } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  feedback: getAll(state),
});

export default connect(mapStateToProps)(ClientFeedback);
