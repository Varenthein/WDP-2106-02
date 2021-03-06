import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew, setFavorite } from '../../../redux/productsRedux.js';

import { getDeviceType } from '../../../redux/deviceRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  deviceType: getDeviceType(state),
});
const mapDispatchToProps = dispatch => ({
  setFav: productId => dispatch(setFavorite(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
