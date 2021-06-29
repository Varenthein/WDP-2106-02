/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getLimitedProducts = ({ products }, limit) =>
  products.slice(0, limit);

export const sortAscByParam = ({ products }, param) =>
  products.sort((a, b) => a[param] > b[param]);

export const sortDescByParam = ( { products}, param) =>
  products.sort((a , b) => b[param] < a[param]);

export const getComparedProducts = ({ products }) =>
  products.filter(item => item.compare === true).map(product => product.image);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SET_FAV = createActionName('SET_FAV');
export const CHANGE_COMPARE = createActionName('CHANGE_COMPARE');

/* action creators */
export const setFavorite = payload => ({ payload, type: SET_FAV });
export const changeCompare = payload => ({ payload, type: CHANGE_COMPARE });


/* reducer */
export default function reducer(statePart = [], action = []) {
  switch (action.type) {
    case SET_FAV: {
      let products = statePart.map(item => {
        if (item.id === action.payload) {
          item.favorite = !item.favorite;
        }
        return item;
      });
      return [...statePart, products];
    }
    case CHANGE_COMPARE: {
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, compare: !product.compare }
          : product
      );
    }
    default:
      return statePart;
  }
}
