import { connect } from 'react-redux';
import StickyBar from './StickyBar';
import { getComparedProducts } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getComparedProducts(state),
});

export default connect(mapStateToProps)(StickyBar);
