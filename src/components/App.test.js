import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'code';
import sinon from 'sinon';
import App from './App';

describe('Given `App`', () => {

  it('should contain a `DogList` component', () => {

    const component = shallow(<App />);

    expect(component.find('DogList').exists()).to.be.true();

  })

})