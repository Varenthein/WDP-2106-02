import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      Select a category
      <ul>
        <li>
          <a href='#'>Category-1</a>
        </li>
        <li>
          <a href='#'>Category-2</a>
        </li>
        <li>
          <a href='#'>SUB Category »</a>
          <ul>
            <li>
              <a href='#'>Sub Category 1</a>
            </li>
            <li>
              <a href='#'>Sub Category 2</a>
            </li>
          </ul>
        </li>
      </ul>
      {/* <FontAwesomeIcon className={styles.icon} icon={faCaretDown} /> */}
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
