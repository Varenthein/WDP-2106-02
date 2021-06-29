import React from 'react';
import PropTypes from 'prop-types';

import styles from './ClientFeedback.module.scss';
import SwipeComponent from '../../common/Swipeable/SwipeComponent';

class ClientFeedback extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  render() {
    const { feedback } = this.props;
    const { activeCategory, activePage } = this.state;
    const clientFeedback = feedback.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(clientFeedback.length);
    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Client Feedback</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul></ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className={styles.comma}>
              <h4>,,</h4>
              <SwipeComponent
                itemsCount={pagesCount}
                activeItem={this.state.activePage}
                swipeAction={this.handlePageChange.bind(this)}
              >
                {clientFeedback.slice(activePage, activePage + 1).map(item => (
                  <div key={item.id} className={styles.feedback_content_box}>
                    <p className={styles.feedbackText}>{item.feedback}</p>
                    <div className={styles.userContainer}>
                      <img src={item.img_src} alt={'Img'} className={styles.userImg} />
                      <div className={styles.userContainerData}>
                        <div>{item.name}</div>
                        <div>Furniture Client</div>
                      </div>
                    </div>
                  </div>
                ))}
              </SwipeComponent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ClientFeedback.propTypes = {
  children: PropTypes.node,
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      feedback: PropTypes.string,
      img_src: PropTypes.string,
    })
  ),
};
ClientFeedback.defaultProps = {
  feedback: [],
};

export default ClientFeedback;
