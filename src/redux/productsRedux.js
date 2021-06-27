/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

// export const getLimitedProducts = ({ products }, limit) =>
//   products.filter(item => item === limit);

// export const sortAscByParam = ({ products }, param) =>
//   products.mixedNumericArray.sort(param);

// export const sortDescByParam = ( { products}, param) =>


/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
