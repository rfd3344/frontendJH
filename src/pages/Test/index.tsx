import React from 'react';


export default function Test() {
  const [v, setV] = React.useState<string>('');
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {

    setV(e.target.value);
  };
  if (v === '1') {
    console.warn('input', v)
    // Simulate a JS error
    setV('');
    throw new Error('I crashed!');
  }
  return (
    <section>

        <input value={v} onChange={handleInput} />
      11111
    </section>
  );
}
