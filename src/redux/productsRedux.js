/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getComparedProducts = ({ products }) =>
  products.filter(item => item.compare === true).map(product => product.image);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
export const CHANGE_COMPARE = createActionName('CHANGE_COMPARE');

/* action creators */
export const changeCompare = payload => ({ payload, type: CHANGE_COMPARE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_COMPARE: {
      return statePart.map(product =>
        product.id === action.payload ? { ...product, compare: true } : !product.compare
      );
    }
    default:
      return statePart;
  }
}
