import React from 'react';
import YourDetails from './YourDetails';
import YourAnimal from './YourAnimal';

export default function Home() {
  return (
    <section>
      <form>
        <YourDetails />
        <YourAnimal />
        <p className="error">
          <label>
            <input id="field" type="text" value="foo" />
          </label>
        </p>
        <input type="submit" value="Create Account" />
      </form>
    </section>
  );
}
