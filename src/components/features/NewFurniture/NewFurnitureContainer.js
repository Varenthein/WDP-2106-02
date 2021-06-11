import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { setFavoriteProduct } from '../../../redux/favoritesRedux';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
});

const mapDispatchToProps = dispatch => ({
  setFavoriteProduct: product => dispatch(setFavoriteProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
