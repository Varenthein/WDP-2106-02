import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';

class Brands extends React.Component {
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
    const { brands } = this.props;
    const { activeCategory, activePage } = this.state;
    const brandsProducts = brands.filter(item => item.category === activeCategory);
    //const pagesCount = Math.ceil(brandsProducts.length / 6);
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className={styles.boxRow}>
              <div className={styles.arrow}>&#60;</div>
              {brandsProducts.map(item => (
                <div key={item.id} className=''>
                  <div className={styles.logoBox}>
                    <div className={styles.logo}>{item.logo}</div>
                  </div>
                </div>
              ))}
              <div className={styles.arrow}>&#62;</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Brands.propTypes = {
  children: PropTypes.node,
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      logo: PropTypes.string,
    })
  ),
};

Brands.defaultProps = {
  brands: [],
};

export default Brands;
