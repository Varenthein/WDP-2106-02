import React from 'react';
import PropTypes from 'prop-types';
import Swipeable from 'react-swipeable';

class Swipe extends React.Component {
  swipingLeft(action) {
    action();
  }
  swipingRight(action) {
    action();
  }

  render() {
    const { children, leftAction, rightAction } = this.props;

    return (
      <Swipeable
        onSwipedLeft={event => this.swipingLeft(event, leftAction)}
        onSwipedRight={event => this.swipingRight(event, rightAction)}
      >
        {children}
      </Swipeable>
    );
  }
}

Swipe.propTypes = {
  leftAction: PropTypes.func.isRequired,
  rightAction: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Swipe;
