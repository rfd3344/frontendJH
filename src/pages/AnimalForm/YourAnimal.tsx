import React, { useContext } from 'react';
import AnimalFormContext, { changeField } from './context';
import { ColourOptions, AnimalOptions } from '@/schemas/animalForm';
import { isAnimalSelected, updateSelectedAnimals } from '@/helper/animalForm';

export default function YourAnimal() {
  const { state, dispatch } = useContext(AnimalFormContext);

  const { animalColour, animals, typeOfTiger } = state.formDetails;
  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    dispatch(changeField(name, value));
  };

  const handleAnimalsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked} = e.target;
    const selectedAnimals = updateSelectedAnimals(name, checked, animals);
    dispatch(changeField('animals', selectedAnimals));
  };

  const handleTypeOfTigerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(changeField(name, value));
  };

  return (
    <section>
      <h3>Your animal</h3>
      <p>
        <select name="animalColour" required value={animalColour} onChange={handleColorChange} >
          <option value=""> Choose colour</option>
          {
            Object.keys(ColourOptions).map(item => (
              <option value={item} key={item}>
                {item.toLowerCase()}
              </option>
            ))
          }
        </select>
      </p>
      <p>
        <span className="label"> Animal </span>
        {
          Object.keys(AnimalOptions).map(item => (
            <label key={item}>
              <input
                type="checkbox"
                name={item}
                checked={isAnimalSelected(item, animals)}
                onChange={handleAnimalsChange}
              />
              {item.toLowerCase()}
            </label>
          ))
        }
      </p>
      <p>
        <label>
          Type of tiger
          <input
            type="text"
            name="typeOfTiger"
            value={typeOfTiger}
            onChange={handleTypeOfTigerChange}
          />
        </label>
      </p>
    </section>
  );
}
