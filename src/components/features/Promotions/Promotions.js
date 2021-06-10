import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promotions.module.scss';

class Promotions extends React.Component {
  render() {
    const { promotions } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className={styles.bigLeft}>
                <img
                  className={styles.image}
                  alt={promotions[0].alt}
                  src={promotions[0].image}
                />
                <div className={styles.overlay}></div>
                <div className={styles.opacityText}>
                  <p>{promotions[0].text}</p>
                  <span>{promotions[0].text_bold}</span>
                  <p className={styles.percents}>{promotions[0].text_percent}</p>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='row'>
                <div className='col-12'>
                  <div className={styles.smallRightUp}>
                    <img
                      className={styles.image}
                      alt={promotions[1].alt}
                      src={promotions[1].image}
                    />
                    <p>{promotions[1].text}</p>
                    <p className={styles.text_2}>{promotions[1].text_2}</p>
                    <span>{promotions[1].text_bold}</span>
                    <p className={styles.money}>{promotions[1].text_money}</p>
                  </div>
                </div>
                <div className='col-12'>
                  <div className={styles.smallRightDown}>
                    <img
                      className={styles.image}
                      alt={promotions[2].alt}
                      src={promotions[2].image}
                    />
                    <p>{promotions[2].text}</p>
                    <p className={styles.text_2}>{promotions[2].text_2}</p>
                    <span>{promotions[2].text_content}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Promotions.propTypes = {
  promotions: PropTypes.array,
};

export default Promotions;
