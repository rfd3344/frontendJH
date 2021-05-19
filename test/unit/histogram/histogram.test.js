import { assert } from 'chai';
import { shallow, render } from 'enzyme';
// import React, { useReducer, useContext } from 'react';
// import { INITIAL_STATE, updatedState } from '_test/data/animalForm';

import DraggableBar from '@/pages/Histogram/DraggableBar';



describe('animalForm component', function () {
  let mockedEvent = null;
  beforeEach(function () {
    mockedEvent = {
      preventDefault: () => {},
      target: {},
    };
  });


  afterEach(function () {
    mockedEvent = null;
  });

  test('create DraggableBar', () => {
    // const { result } = renderHook(() => useReducer(animalFormReducer, INITIAL_STATE));
    // const [state, dispatch] = result.current;
    // const wrapper = mount(
    //   <AnimalFormContext.Provider value={{ state, dispatch }}>
    //     <Form />
    //   </AnimalFormContext.Provider>
    // );
    // const wrapper = shallow(<DraggableBar barData, index, barTotal, svgInfo />);
    const form = wrapper.find('form');
    form.simulate('submit', mockedEvent);
    assert.strictEqual(wrapper.find('.Form').length, 1);
  });


});
