/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart, faEye } from '@fortawesome/free-regular-svg-icons';

import styles from './Gallery.module.scss';
import Button from '../../common/Button/Button';
import Tooltip from '../../common/Tooltip/Tooltip';
import SwipeComponent from '../../common/Swipeable/SwipeComponent';

const getContainerWith = (targetRef) => {
  const getWidth = () => targetRef.current.offsetWidth;
  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(getWidth());

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useLayoutEffect(() => {
    handleResize();
  }, []);

  return width;
};

const Gallery = ({ getFeatured, getTopSeller, getSaleOff, getTopRated }) => {
  const galleryTabs = [
    { id: 'featured', name: 'Featured', products: getFeatured },
    { id: 'topSeller', name: 'Top seller', products: getTopSeller },
    { id: 'saleOff', name: 'Sale off', products: getSaleOff },
    { id: 'topRated', name: 'Top rated', products: getTopRated },
  ];

  // state
  const [activeTab, setActiveTab] = useState(galleryTabs[0]);
  const [activeProduct, setActiveProduct] = useState(activeTab.products[0]);
  const [isFading, setFading] = useState(false);
  const [activePage, setActivePage] = useState(0);

  // RWD
  const slidesContainerRef = useRef();
  const slidesContainerWidth = getContainerWith(slidesContainerRef);

  let slidesAmount;
  if(slidesContainerWidth < 270) {
    slidesAmount = 3;
  } else if(slidesContainerWidth < 320) {
    slidesAmount = 4;
  } else if(slidesContainerWidth < 380) {
    slidesAmount = 5;
  } else slidesAmount = 6;

  // actions
  const pagesCount = Math.ceil(activeTab.products.length / slidesAmount);
  
  const handleTabChange = (newIndex) => {
    setFading(true);
    setTimeout(() => {
      setActiveTab(galleryTabs[newIndex]);
      setActiveProduct(galleryTabs[newIndex].products[0]);
    }, 500);
    setTimeout(() => {
      setFading(false);
    }, 500);
  };

  const handleSlideClick = (clickedElement) => {
    setFading(true);
    setTimeout(() => {
      setActiveProduct(clickedElement);
    }, 500);
    setTimeout(() => {
      setFading(false);
    }, 500);
  };

  const handlePageChange = (newPage) => {
    setFading(true);
    setTimeout(() => {
      setActivePage(newPage);
    }, 500);
    setTimeout(() => {
      setFading(false);
    }, 500);
  };

  const movePageRight = (newPage) => {
    if(activePage < pagesCount - 1) {
      handlePageChange(newPage);
    }
  };

  const movePageLeft = (newPage) => {
    if(activePage > 0 && activePage < pagesCount) {
      handlePageChange(newPage);
    }
  };

  return (
    <SwipeComponent
      itemsCount={pagesCount}
      activeItem={activePage}
    >
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className={'col-12 col-lg-6 ' + styles.galleryBox}>
              <div className={'col-12 col-md-auto ' + styles.heading}>
                <h3>Furniture gallery</h3>
              </div>
              <div className={styles.galleryContent}>
                <nav className={styles.tabs}>
                  <ul>
                    {galleryTabs.map(tab => (
                      <li key={galleryTabs.indexOf(tab)}>
                        <a
                          href='#'
                          onClick={(e) => {
                            handleTabChange(galleryTabs.indexOf(tab));
                            e.preventDefault();
                            handlePageChange(0);
                          }}
                          className={tab === activeTab && styles.active}
                        >
                          {tab.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className={
                  styles.content +
                  (isFading ? ` ${styles.fadeout}` : ` ${styles.fadein}`)
                }>
                  <div className={styles.image}>
                    <img alt='img' src={activeProduct.image} />
                  </div>
                  <div className={styles.buttons}>
                    <Tooltip className={styles.tooltip} tooltipText='Add To Favourites'>
                      <Button variant='outline'>
                        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                      </Button>
                    </Tooltip>
                    <Tooltip className={styles.tooltip} tooltipText='Compare'>
                      <Button variant='outline'>
                        <FontAwesomeIcon icon={faExchangeAlt} />
                      </Button>
                    </Tooltip>
                    <Tooltip className={styles.tooltip} tooltipText='See The Details'>
                      <Button variant='outline'>
                        <FontAwesomeIcon icon={faEye} />
                      </Button>
                    </Tooltip>
                    <Tooltip className={styles.tooltip} tooltipText='Add To Cart'>
                      <Button variant='outline'>
                        <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
                      </Button>
                    </Tooltip>
                  </div>
                  <div className={styles.details}>
                    <div className={styles.wrapper}>
                      <div className={styles.prices}>
                        <p className={styles.price}>$ {activeProduct.price}.00</p>
                        <p className={styles.oldPrice}>
                          {activeProduct.oldPrice ? ('$ ' + activeProduct.oldPrice + '.00') : ''}
                        </p>
                      </div>
                      <div className={styles.detailsContent}>
                        <h5>{activeProduct.name}</h5>
                        <div className={styles.stars}>
                          {[1, 2, 3, 4, 5].map(i => (
                            <a key={i} href='#'>
                              {i <= activeProduct.stars ? (
                                <FontAwesomeIcon icon={faStar}>
                                  {i} stars
                                </FontAwesomeIcon>
                              ) : (
                                <FontAwesomeIcon icon={farStar}>
                                  {i} stars
                                </FontAwesomeIcon>
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={
                  'row ' +
                  styles.slider +
                  (isFading ? ` ${styles.fadeout}` : ` ${styles.fadein}`)
                }>
                  <button
                    type='button'
                    className={'btn rounded-0 ' + styles.buttonLeft}
                    onClick={() => movePageLeft(activePage - 1)}
                  >
                    <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
                  </button>
                  <div ref={slidesContainerRef} className={'col ' + styles.slides}>
                    {activeTab.products
                      .slice(activePage * slidesAmount, (activePage + 1) * slidesAmount)
                      .map(product => (
                        <div
                          key={product.id}
                          className={styles.slide}
                          onClick={() => handleSlideClick(product)}
                        >
                          <img src={product.image} alt='img' />
                        </div>
                      ))}
                  </div>
                  <button
                    type='button'
                    className={'btn rounded-0 ' + styles.buttonRight}
                    onClick={() => movePageRight(activePage + 1)}
                  >
                    <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
                  </button>
                </div>
              </div>
            </div>
            <div className={'col col-lg-6 ' + styles.staticAd}>
              <div className={styles.wrapper}>
                <div className={styles.adImage}>
                  <img
                    alt='sth'
                    src='https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                  />
                  <div className={styles.adInner}>
                    <h3>
                      <span>FROM</span>$50.80
                    </h3>
                    <h4>Bedroom Bed</h4>
                    <Button className={styles.button} variant='main'>
                      SHOP NOW
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SwipeComponent>
  );
};

Gallery.propTypes = {
  getFeatured: PropTypes.array,
  getTopSeller: PropTypes.array,
  getSaleOff: PropTypes.array,
  getTopRated: PropTypes.array,
};

export default Gallery;
