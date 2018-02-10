import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'code';
import sinon from 'sinon';
import DogList from './index';

describe('Given `DogList`', () => {

  const requiredProps = (overrideProps = {}) => {

    return {
      ...overrideProps
    }

  }

  const renderComponent = (props = requiredProps()) => {

    return shallow(<DogList {...props} />)

  }

  it('should exist as a `div`', () => {

    const component = renderComponent();

    expect(component.type()).to.equal('ul');

  })



})