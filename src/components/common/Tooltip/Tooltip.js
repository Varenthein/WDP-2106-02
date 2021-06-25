import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Tooltip.module.scss';

const Tooltip = ({ children, tooltipText }) => {
  const tipRef = useRef();

  const handleMouseEnter = () => {
    tipRef.current.style.opacity = 1;
  };
  const handleMouseLeave = () => {
    tipRef.current.style.opacity = 0;
  };

  return (
    <div className={styles.tooltipWrapper}>
      <div className={styles.tooltip} ref={tipRef}>
        <div className={styles.tooltipArrow} />
        {tooltipText}
      </div>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
    </div>
  );
};

Tooltip.propTypes = {
  tooltipText: PropTypes.string,
  children: PropTypes.object,
};

export default Tooltip;
