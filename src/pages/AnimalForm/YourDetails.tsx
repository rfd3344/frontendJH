
import React, { useContext } from 'react';
import AnimalFormContext, { changeField } from './context';


export default function YourDetails() {
  const { state, dispatch } = useContext(AnimalFormContext);

  const { email, password } = state.formDetails;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(changeField(name, value));
  };

  return (
    <>
      <input type="email" name="email" value={email} onChange={handleChange} />
      <input type="password" name="password" value={password} onChange={handleChange} />
    </>
  );
}
