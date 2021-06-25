import React from 'react';
import PropTypes from 'prop-types';

import styles from './FeaturedProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const FeaturedProductBox = ({ id, src, alt, oldPrice, stars, product }) => {
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img className={styles.img} src={src} alt={alt} />
        <div className={styles.buttons}>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
          <div className={styles.timer}>
            <div className={styles.circle}>
              <span>11</span> days
            </div>
            <div className={styles.circle}>
              <span>11</span> hrs
            </div>
            <div className={styles.circle}>
              <span>11</span> mins
            </div>
            <div className={styles.circle}>
              <span>11</span> secs
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{product[1]}</h5>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= product[4] ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faEye}>Add to compare</FontAwesomeIcon>
          </Button>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.oldPrice}>${oldPrice}</div>
        <div className={styles.price}>
          <Button noHover variant='small'>
            $ {product[3]}
          </Button>
        </div>
      </div>
    </div>
  );
};

FeaturedProductBox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  stars: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.string,
  product: PropTypes.any,
};

export default FeaturedProductBox;
