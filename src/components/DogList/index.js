import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DogList = (dogs) => {
    return (
        <ul className="dog-list">
            
        </ul>
    );
};

DogList.propTypes = {
    dogs: PropTypes.array
}

export default DogList;