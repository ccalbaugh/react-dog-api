import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DogList = ({ dogs }) => {
    console.log(dogs)
    return (
        <ul className="dog-list">
            {
                dogs.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    dogs.map((dog) => {
                      return  <li key={`${dog.breed}-key`} className="dog-list-item">Breed: {dog.breed}</li>
                    })
                )
            }
        </ul>
    );
};

DogList.propTypes = {
    dogs: PropTypes.array
}

export default DogList;