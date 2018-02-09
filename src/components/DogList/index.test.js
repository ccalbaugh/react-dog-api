import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import DogList from './DogList';

describe('Given `DogList`', () => {

  it('should contain a `div`', () => {

    const component = shallow(<DogList />);

    expect(component.find('div').exists()).to.be.true();

  })

})