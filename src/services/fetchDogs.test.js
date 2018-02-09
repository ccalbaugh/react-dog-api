import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'code';
import sinon from 'sinon';
import { fetchDogs } from './fetchDogs';
import * as fetchServices from './fetchDogs';

describe('fetchDogs', () => {

    let sandbox,
    fetchDogsStub
  
    beforeEach(() => {
  
      sandbox = sinon.createSandbox()
  
      fetchDogsStub = sandbox.stub(fetchServices, 'fetchDogs').resolves({})
  
    })
  
    afterEach(() => {
  
      sandbox.restore()
  
    })
  
    it('should make a request', () => {

        fetchDogs()

        sinon.assert.calledOnce(fetchDogsStub)

    })
  
  })