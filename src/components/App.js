import React, { Component } from 'react';
import './App.css';
import DogList from './DogList';
import { fetchDogs } from '../services/fetchDogs';

class App extends Component {

  componentDidMount() {
    this.fetchDogList()
  }

  fetchDogList = () => {
    return fetchDogs()
  }

  render() {
    return (
      <div className="App">
        <DogList />
      </div>
    );
  }
}

export default App;
