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
                  <h2>{promotions[0].text}</h2>
                  <span>{promotions[0].text_bold}</span>
                  <h3 className={styles.percents}>{promotions[0].text_percent}</h3>
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
                    <h1>{promotions[1].text}</h1>
                    <h2 className={styles.text_2}>{promotions[1].text_2}</h2>
                    <span>{promotions[1].text_bold}</span>
                    <h3 className={styles.money}>{promotions[1].text_money}</h3>
                  </div>
                </div>
                <div className='col-12'>
                  <div className={styles.smallRightDown}>
                    <img
                      className={styles.image}
                      alt={promotions[2].alt}
                      src={promotions[2].image}
                    />
                    <h2>{promotions[2].text}</h2>
                    <h3 className={styles.text_2}>{promotions[2].text_2}</h3>
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
