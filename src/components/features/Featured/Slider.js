import React from 'react';
import PropTypes from 'prop-types';
import styles from './Featured.module.scss';
const Slider = (props) => {

  return (
    <React.Fragment>
      <div className={styles.imgBox + (props.isActive ? ' ' + styles.fadeout : ' ' + styles.fadein)}>
        <img className={styles.imgBoxImage} src={props.image.link} alt={props.id} />
        <div className={styles.imgDescription}>
          <div className={styles.imgDescriptionTitle}>
                    Featured <span>furniture</span>
          </div>
          {props.image.title}
          <div className={styles.imgButton}>shop now</div>
        </div>
      </div>
      <div className={styles.imgButtons}>
        <div className={styles.buttonPrev} onClick={props.slidePrev}>&#60;</div>
        <div className={styles.buttonNext} onClick={props.slideNext}>&#62;</div>
      </div>
    </React.Fragment>
  );
};

Slider.propTypes = {
  id: PropTypes.any,
  link: PropTypes.any,
  image: PropTypes.any,
  title: PropTypes.any,
  slidePrev: PropTypes.any,
  slideNext: PropTypes.any,
  isActive: PropTypes.any,
};

export default Slider;