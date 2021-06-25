import React from 'react';
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

const Gallery = ({ gallery, getActiveItem, stars }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={'col-12 col-md-6 ' + styles.galleryBox}>
            <div className={'col-12 col-md-auto ' + styles.heading}>
              <h3>Furniture gallery</h3>
            </div>
            <div className={styles.galleryContent}>
              <nav className={styles.tabs}>
                <ul>
                  <li>
                    <a href='#' className={styles.tab + styles.active}>
                      Featured
                    </a>
                  </li>
                  <li>
                    <a href='#' className={styles.tab}>
                      Top seller
                    </a>
                  </li>
                  <li>
                    <a href='#' className={styles.tab}>
                      Sale off
                    </a>
                  </li>
                  <li>
                    <a href='#' className={styles.tab}>
                      Top rated
                    </a>
                  </li>
                </ul>
              </nav>
              <div className={styles.content}>
                {getActiveItem.map(item => (
                  <div key={item} className={styles.image}>
                    <img alt={'Featured'} src={item.image} />
                  </div>
                ))}
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
                  {getActiveItem.map(item => (
                    <div key={item} className={styles.wrapper}>
                      <div className={styles.prices}>
                        <p className={styles.price}>$ {item.price}.00</p>
                        <p className={styles.oldPrice}>$ {item.oldPrice}.00</p>
                      </div>
                      <div className={styles.detailsContent}>
                        <h5 key={item}>{item.name}</h5>
                        <div className={styles.stars}>
                          {[1, 2, 3, 4, 5].map(i => (
                            <a key={i} href='#'>
                              {i <= item.stars ? (
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
                  ))}
                </div>
              </div>
              <div className={'row ' + styles.slider}>
                <button type='button' className={'btn rounded-0 ' + styles.buttonLeft}>
                  <FontAwesomeIcon className={styles.icon} icon={faAngleLeft} />
                </button>
                <div className={'col ' + styles.slides}>
                  {gallery.map(item => (
                    <div key={item.id} className={styles.slide}>
                      <img src={item.image} alt='' />
                    </div>
                  ))}
                </div>
                <button type='button' className={'btn rounded-0 ' + styles.buttonRight}>
                  <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
                </button>
              </div>
            </div>
          </div>
          <div className={'col-12 col-md-6 ' + styles.staticAd}>
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
  );
};

Gallery.propTypes = {
  gallery: PropTypes.array,
  getActiveItem: PropTypes.array,
  stars: PropTypes.number,
};

export default Gallery;
