import ToyCard from './ToyCard'
import React, { Component } from 'react'

export default class ToyContainer extends Component {

  constructor() {
    super();

    this.state = {
      toys: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/toys')
    .then(response => response.json())
    .then(toysArray => {
      this.setState({
        toys: toysArray
      })
    })
  }

  render() {

    console.log(this.state)
    let renderToys = () => {
      this.state.map(toyObj =>{
        return <ToyCard key={toyObj.id} name={toyObj.name} image={toyObj.image} likes={toyObj.likes}/>
      })
    }

    return (
      <div id="toy-collection">
       {renderToys}
    </div>
    )
  }
}
