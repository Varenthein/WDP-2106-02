import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import styles from './StarsRating.module.scss';

const StarsRating = ({ stars }) => {
  const [rating, setRating] = useState(stars);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              type='radio'
              name='rating'
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FontAwesomeIcon
              className={styles.stars}
              icon={faStar}
              color={ratingValue <= (hover || rating) ? '#d58e32' : '#e4e5e9'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            >
              {i} stars
            </FontAwesomeIcon>
          </label>
        );
      })}
    </div>
  );
};

StarsRating.propTypes = {
  stars: PropTypes.number,
};

export default StarsRating;
