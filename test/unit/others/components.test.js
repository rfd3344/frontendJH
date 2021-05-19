import { assert } from 'chai';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Loading from '@/components/Loading';


describe('component test', function () {
  it('Loading component should pass', function () {
    const wrapper = shallow(<Loading open />);
    const materialRoot = wrapper.find('Fragment');
    assert.strictEqual(materialRoot.length, 1);
  });



  it('Loading component should pass', function () {
    const wrapper = mount(<Loading open />);
    const materialRoot = wrapper.find('.MuiBackdrop-root');
    assert.strictEqual(materialRoot.length, 1);
    assert.strictEqual(1 + 2, 3);
  });
});
