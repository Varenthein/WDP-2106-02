import React from 'react';
import styles from './StickyBar.module.scss';
import Button from '../../common/Button/Button';
import PropTypes from 'prop-types';

const StickyBar = ({ getComparedProducts }) => (
  <div className={styles.container}>
    <div className='container'>
      <div className='row'>
        <div className='col-10'>
          <div className='row'>
            <div className={styles.image}></div>
            {getComparedProducts}
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
);

StickyBar.propTypes = {
  getComparedProducts: PropTypes.object,
};

export default StickyBar;
