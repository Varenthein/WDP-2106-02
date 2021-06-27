import React from 'react';
import styles from './StickyBar.module.scss';
import Button from '../../common/Button/Button';
import PropTypes from 'prop-types';

const StickyBar = ({ compareProducts }) =>
  compareProducts.length > 0 ? (
    <div className={styles.container}>
      <div className='container'>
        <div className='row'>
          <div className='col-10'>
            <div className='row'>
              {compareProducts.map(product => (
                <img
                  key={product}
                  src={product}
                  className={styles.image}
                  alt='compareProduct'
                ></img>
              ))}
            </div>
          </div>
          <div className='col-2'>
            <Button className={styles.btn} variant={'outline'}>
              Compare
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ''
  );

StickyBar.propTypes = {
  compareProducts: PropTypes.array,
};

export default StickyBar;
