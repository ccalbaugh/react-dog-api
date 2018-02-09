import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import DogList from './DogList';
import { fetchDogs } from '../services/fetchDogs';

class App extends Component {

  state = {
    dogs: []
  }

  componentDidMount() {
    fetchDogs()
    .then(dogs => {
      this.setState({ dogs })
    })
  }

  render() {
    return (
      <section className="App">
        <DogList />
      </section>
    );
  }
}

export default App;
