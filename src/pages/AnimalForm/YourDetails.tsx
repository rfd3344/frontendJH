
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
    <div className="YourDetails">
      <h3>Your details</h3>
      <p>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
      </p>
      <p>
        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            pattern=".{8,}"
            title="Password must be longer than 8 characters"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
      </p>
    </div>
  );
}
