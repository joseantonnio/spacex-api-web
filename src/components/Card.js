import React from 'react';
import './Card.css';
import { RotatingLines } from  'react-loader-spinner'

class Card extends React.Component {
  render() {
    return (
      <div class="App-card">
        <div class="App-card-bg" style={{ backgroundImage: `url(${this.props.bg})` }}></div>
        {this.props.loading ? <RotatingLines strokeColor="white" width="36" /> : this.props.children}
      </div>
    );
  }
}

export default Card;