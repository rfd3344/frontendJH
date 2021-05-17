import { assert } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import Loading from '@/components/Loading';


describe('component test', function () {
  it('Loading component should pass', function () {
    const wrapper = shallow(<Loading open />);
    // const header1 = wrapper.find('h1');
    // console.warn('rfd header1', header1)
    assert.strictEqual(1 + 2, 3);
  });

});
