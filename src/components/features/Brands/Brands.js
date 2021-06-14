import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';

class Brands extends React.Component {
  state = {
    activePage: 0,
  };

  prevSlide(newPage) {
    if (-1 < newPage) {
      this.setState({ activePage: newPage });
    } else {
      return false;
    }
  }
  nextSlide(newPage, pagesCount) {
    if (newPage < pagesCount) {
      this.setState({ activePage: newPage });
    } else {
      return false;
    }
  }
  render() {
    console.log(this.state.screenWidth);
    const { brands } = this.props;
    const { activePage } = this.state;
    const pagesCount = Math.ceil(brands.length / 6);
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className={styles.boxRow}>
              <div
                className={styles.arrow}
                onClick={() => this.prevSlide(activePage - 1)}
              >
                &#60;
              </div>
              {brands.slice(activePage * 6, (activePage + 1) * 6).map(item => (
                <div key={item.id} className=''>
                  <div className={styles.logoBox}>
                    <img src={item.logo} className={styles.logo} alt='logo' />
                  </div>
                </div>
              ))}
              <div
                className={styles.arrow}
                onClick={() => this.nextSlide(activePage + 1, pagesCount)}
              >
                &#62;
              </div>
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
