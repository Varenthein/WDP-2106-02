/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

class Swipeable extends React.Component {
  state = {
    setStart: 0,
    setEnd: 0,
  };

  handleTouchStart = event => {
    this.setState({ setStart: event.touches[0].clientX });
    this.setState({ setEnd: event.touches[0].clientX });
  };

  handleTouchMove = event => {
    this.setState({ setEnd: event.touches[0].clientX });
  };

  handleTouchEnd = () => {
    if (this.state.setEnd <= this.state.setStart * 0) {
      this.props.leftAction();
    } else if (this.state.setEnd >= this.state.setStart * 1.1) {
      this.props.rightAction();
    }
  };

  render() {
    return (
      <div
        onTouchStart={event => this.handleTouchStart(event)}
        onTouchEnd={() => this.handleTouchEnd()}
        onTouchMove={event => this.handleTouchMove(event)}
      >
        {console.log(this.props)}
        {this.props.children}
      </div>
    );
  }
}

Swipeable.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};

export default Swipeable;
