import React from 'react';
import './Card.css';
import { RotatingLines } from  'react-loader-spinner'

class Card extends React.Component {
  render() {
    const loading = this.props.loading || false;

    return (
      <div class="App-card">
        <div class="App-card-bg" style={{ backgroundImage: `url(${this.props.bg})` }}></div>
        {loading ? <RotatingLines strokeColor="white" width="36" /> : this.props.children}
      </div>
    );
  }
}

export default Card;