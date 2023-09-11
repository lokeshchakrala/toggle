import React, { Component } from 'react';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false,
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      isToggled: !prevState.isToggled,
    }));
  };

  render() {
    const { isToggled } = this.state;

    return (
      <div>
        <button onClick={this.handleToggle}>
          {isToggled ? 'ON' : 'OFF'}
        </button>
        <p>Status: {isToggled ? 'ON' : 'OFF'}</p>
      </div>
    );
  }
}

export default Toggle;
