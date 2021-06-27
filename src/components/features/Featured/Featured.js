import React from 'react';
import PropTypes from 'prop-types';

import styles from './Featured.module.scss';
import FeaturedProductBox from '../../common/FeaturedProductBox/FeaturedProductBox';

class Featured extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  render() {
    const { promo_products } = this.props;
    const { activePage } = this.state;
    const pagesCount = Math.ceil(promo_products.length);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.contentContainer}>
            <div className={styles.leftBox}>
              <div className={styles.boxHeader}>
                hot deals
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>

              <div className={styles.imgContainer}>
                {promo_products.slice(activePage, activePage + 1).map(item => (
                  <div key={item.id}>
                    <FeaturedProductBox {...item} />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.rightBox}>
              <div className={styles.imgBox}>
                <div className={styles.imgDescription}>
                  <div className={styles.imgDescriptionTitle}>
                    indoor <span>furniture</span>
                  </div>
                  save up to 50% of all furniture
                  <div className={styles.imgButton}>shop now</div>
                </div>
              </div>
              <div className={styles.imgButtons}>
                <div className={styles.buttonPrev}>&#60;</div>
                <div className={styles.buttonNext}>&#62;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Featured.propTypes = {
  children: PropTypes.node,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      oldPrice: PropTypes.number,
      price: PropTypes.number,
      stars: PropTypes.number,
      newFurniture: PropTypes.bool,
    })
  ),
  promo_products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      oldPrice: PropTypes.number,
      src: PropTypes.string,
      alt: PropTypes.string,
      product: PropTypes.any,
    })
  ),
};

Featured.defaultProps = {
  promo_products: [],
};

export default Featured;
