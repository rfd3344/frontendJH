import React, { useContext } from 'react';
import AnimalFormContext, { addErrorMessage, createdAccount } from './context';
import YourDetails from './YourDetails';
import YourAnimal from './YourAnimal';
import ErrorMessage from './ErrorMessage';

export default function Form() {
  const { state, dispatch } = useContext(AnimalFormContext);

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { formDetails } = state;
    console.warn(state)
    if(formDetails.animals.length < 2) {
      dispatch(addErrorMessage('At least two Animals must be chosen'));
      return;
    } else {
      setTimeout(()=> {
        dispatch(createdAccount(false, 'Account created success'));
      }, 1000);
    }
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <YourDetails />
      <YourAnimal />
      <ErrorMessage />
      <input type="submit" value="Create Account" />
    </form>
  );
}
