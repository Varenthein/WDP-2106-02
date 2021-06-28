import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

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
    const { brands } = this.props;
    const { activePage } = this.state;
    const pagesCount = Math.ceil(brands.length / 6);

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className={'col ' + styles.content}>
                <button
                  type='button'
                  className='btn rounded-0'
                  onClick={() => this.prevSlide(activePage - 1)}
                >
                  <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
                </button>
                <div className={styles.logoBoxes}>
                  {brands.slice(activePage * 6, (activePage + 1) * 6).map(item => (
                    <div key={item.id} className={styles.logoBox}>
                      <img src={item.logo} alt='logo' />
                    </div>
                  ))}
                </div>
                <button
                  type='button'
                  className='btn rounded-0'
                  onClick={() => this.nextSlide(activePage + 1, pagesCount)}
                >
                  <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
                </button>
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
