import React, { Component } from 'react';

class ToyCard extends Component {
  
  render() {
    console.log(this.state.toys)

    let {name, image, likes} = this.state.toys

    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn">Like {'<3'}</button>
        <button className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }
}

export default ToyCard;
