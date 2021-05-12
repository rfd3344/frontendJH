
import React, { useContext } from 'react';
import AnimalFormContext, { changeField } from './context';


export default function YourDetails() {
  const { state, dispatch } = useContext(AnimalFormContext);

  const { email, password } = state.formDetails;
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(changeField(name, value));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    dispatch(changeField(name, value));
  };

  return (
    <>
      <h3>Your details</h3>
      <p>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={handleEmailChange}
          />
        </label>
      </p>
      <p>
        <label>
          Password
          <input
            type="password"
            name="password"
            pattern=".{8,}"
            required
            title="Password must be longer than 8 characters"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
      </p>
    </>
  );
}
