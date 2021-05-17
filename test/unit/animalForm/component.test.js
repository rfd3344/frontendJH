import { assert } from 'chai';
import { renderHook } from '@testing-library/react-hooks';
import { shallow } from 'enzyme';
import React, { useReducer, useContext } from 'react';
import { INITIAL_STATE, updatedState } from '_test/data/animalForm';
import AnimalFormContext, { animalFormReducer } from '@/pages/AnimalForm/context';
import Form from '@/pages/AnimalForm/Form';
import YourAnimal from '@/pages/AnimalForm/YourAnimal';
import YourDetails from '@/pages/AnimalForm/YourDetails';
import ErrorMessage from '@/pages/AnimalForm/ErrorMessage';


describe('animalForm component', function () {
  // let useContextMock;
  // beforeEach(function () {
  //   // useContextMock = React.useContext = jest.fn();
  // });

  // afterEach(function () {

  // });

  test('create Form', () => {
    const { result } = renderHook(() => useReducer(animalFormReducer, INITIAL_STATE));
    const [state, dispatch] = result.current;
    const wrapper = shallow(
      <AnimalFormContext.Provider value={{ state, dispatch }}>
        <Form />
      </AnimalFormContext.Provider>
    );
    // const wrapper = shallow(<Form />)


  });

});
