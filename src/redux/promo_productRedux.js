/* selectors */

// eslint-disable-next-line no-unused-expressions
export const getAll = ({ promo_products, products }) =>
  promo_products.map(prom => ({
    ...prom,
    product: Object.values(products.find(prod => prod.id === prom.id)),
  }));
export const getCount = ({ promo_products }) => promo_products.length;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
