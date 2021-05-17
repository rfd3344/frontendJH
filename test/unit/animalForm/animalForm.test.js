import { assert } from 'chai';
import { renderHook } from '@testing-library/react-hooks';
import { shallow, render } from 'enzyme';
import React, { useReducer, useContext } from 'react';
import { INITIAL_STATE, updatedState } from '_test/data/animalForm';
import AnimalFormContext, { animalFormReducer } from '@/pages/AnimalForm/context';
import Form from '@/pages/AnimalForm/Form';
import YourAnimal from '@/pages/AnimalForm/YourAnimal';
import YourDetails from '@/pages/AnimalForm/YourDetails';
import ErrorMessage from '@/pages/AnimalForm/ErrorMessage';


describe('animalForm component', function () {
	let mockedEvent = null;
	beforeEach(function () {
    mockedEvent = {
      preventDefault: () => {},
      target: {}
    };
	});


	afterEach(function () {
		mockedEvent = null;
	});

  test('create Form', () => {
    // const { result } = renderHook(() => useReducer(animalFormReducer, INITIAL_STATE));
    // const [state, dispatch] = result.current;
    // const wrapper = mount(
    //   <AnimalFormContext.Provider value={{ state, dispatch }}>
    //     <Form />
    //   </AnimalFormContext.Provider>
    // );
    const wrapper = shallow(<Form />)
    const form = wrapper.find('form');
    form.simulate('submit', mockedEvent);
    assert.strictEqual(wrapper.find('.Form').length, 1);
  });

  test('create YourAnimal', () => {
    const wrapper = shallow(<YourAnimal />)
    assert.strictEqual(wrapper.find('select[name="animalColour"] option').length, 6);
    assert.strictEqual(wrapper.find('.animalSelector input').length, 4);
    assert.strictEqual(wrapper.find('input[name="typeOfTiger"]').length, 0);
  });


  test('create YourDetails', () => {
    const wrapper = shallow(<YourDetails />)
    const emailElm = wrapper.find('input[name="email"]');
    const passwordElm = wrapper.find('input[name="password"]');

    emailElm.simulate('change', mockedEvent);
    passwordElm.simulate('change', mockedEvent);
    assert.strictEqual(emailElm.length, 1);
    assert.strictEqual(passwordElm.length, 1);

  });


  test('create ErrorMessage', () => {
    const wrapper = shallow(<ErrorMessage />);
    assert.isNull(wrapper.html());

  });

  test('static render Form', () => {
    const wrapper = render(<Form />);

    const emailElm = wrapper.find('input[name="email"]');
    const passwordElm = wrapper.find('input[name="password"]');
    assert.strictEqual(emailElm.length, 1);
    assert.strictEqual(passwordElm.length, 1);

    assert.strictEqual(wrapper.find('select[name="animalColour"] option').length, 6);
    assert.strictEqual(wrapper.find('.animalSelector input').length, 4);
    assert.strictEqual(wrapper.find('input[name="typeOfTiger"]').length, 0);

  });



});
