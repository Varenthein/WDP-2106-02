import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => {
  const [isOpen, toggleOpen] = useState(false);
  const toggle = () => toggleOpen(!isOpen);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-center justify-content-md-center'>
          <div
            className={'col-10 col-md-auto order-2 order-md-1 ' + styles.searchWrapper}
          >
            <ProductSearch />
          </div>
          <div className={'col-2 col-md-auto order-1 order-md-2 ' + styles.menu}>
            <nav className='navbar navbar-expand-md'>
              <button
                className={'navbar-toggler ' + styles.toggler}
                type='button'
                data-toggle='collapse'
                onClick={toggle}
              >
                <FontAwesomeIcon className={styles.icon} icon={faBars} />
              </button>
              <div className={'collapse navbar-collapse ' + (isOpen ? 'show' : 'hide')}>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <a href='/' className={'nav-link ' + styles.active}>
                      Home
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='/shop/furniture' className='nav-link'>
                      Furniture
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='/shop/chair' className='nav-link'>
                      Chair
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='/shop/table' className='nav-link'>
                      Table
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='/shop/sofa' className='nav-link'>
                      Sofa
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='/shop/bedroom' className='nav-link'>
                      Bedroom
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='/shop/blog' className='nav-link'>
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
