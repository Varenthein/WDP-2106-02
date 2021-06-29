import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { changeCompare } from '../../../redux/productsRedux';

const mapDispatchToProps = dispatch => ({
  changeCompare: productId => dispatch(changeCompare(productId)),
});

export default connect(null, mapDispatchToProps)(ProductBox);
