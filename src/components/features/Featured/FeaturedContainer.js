import { connect } from 'react-redux';

import Featured from './Featured';

import { getAll } from '../../../redux/promo_productRedux.js';

const mapStateToProps = state => ({
  promo_products: getAll(state),
});

export default connect(mapStateToProps)(Featured);
