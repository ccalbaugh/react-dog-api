import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DogList = (dogs) => {
    return (
        <div className="dog-list"></div>
    );
};

DogList.propTypes = {
    dogs: PropTypes.array.isRequired
}

export default DogList;