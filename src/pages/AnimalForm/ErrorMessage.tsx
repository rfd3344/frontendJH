import React, { useContext } from 'react';
import AnimalFormContext from './context';

export default function ErrorMessage() {
  const { state } = useContext(AnimalFormContext);
  if(!state.message.text) return null;

  return (
    <div className="ErrorMessage">
      <div className={state.message.isError ? 'error' : 'success'}>
        * {state.message.text}
      </div>
    </div>
  );
}
