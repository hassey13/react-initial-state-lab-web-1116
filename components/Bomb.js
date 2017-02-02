const React = require('react');

class Bomb extends React.Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    let count = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
    return (<div>{count}</div>)
  }
}

module.exports = Bomb;
