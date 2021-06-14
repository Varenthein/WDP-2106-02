/* selectors */
export const getAll = ({ promo_products }) => promo_products;
export const getCount = ({ promo_products }) => promo_products.length;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
