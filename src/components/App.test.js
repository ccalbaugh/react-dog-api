import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'code';
import sinon from 'sinon';
import App from './App';
import * as dogServices from '../services/fetchDogs';

describe('Given `App`', () => {

  let sandbox,
  fetchDogsStub

  beforeEach(() => {

    sandbox = sinon.createSandbox()

    fetchDogsStub = sandbox.stub(dogServices, 'fetchDogs').resolves(['one', 'two'])

  })

  afterEach(() => {

    sandbox.restore()

  })

  const requiredProps = (overrides = {}) => {

    return {
      fetchDogs: fetchDogsStub,
      ...overrides
    }

  } 

  const renderComponent = (props = requiredProps()) => {

    return shallow(<App {...props} />)

  }


  it('should contain a `DogList` component', () => {

    const component = shallow(<App />);

    expect(component.find('DogList').exists()).to.be.true();

  })

  it('should contain no `dogBreeds`')

})