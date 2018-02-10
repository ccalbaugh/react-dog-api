import React, { Component } from 'react';
import './App.css';
import DogList from './DogList';
import { fetchDogs } from '../services/fetchDogs';

class App extends Component {

  state = {
    dogs: []
  }

  async componentDidMount() {
    const dogs = await fetchDogs()
    .then((data) => {
      let dogsArr = [];
      for (let breed in data) {
        dogsArr.push({
          breed: breed,
          subBreeds: data[breed]
        })
      }
      return dogsArr
    })

    this.setState({ dogs })
  }

  render() {
    return (
      <section className="App">
        <DogList {...this.state} />
      </section>
    );
  }
}

export default App;
