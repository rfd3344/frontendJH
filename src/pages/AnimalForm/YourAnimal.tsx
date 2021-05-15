import React, { useContext } from 'react';
import AnimalFormContext, { changeField } from './context';
import { ColourOptions, AnimalOptions } from '@/schemas/animalForm';
import { isAnimalSelected, updateSelectedAnimals, isTigerSelected } from '@/helper/animalForm';

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
    <div className="YourAnimal">
      <h3>Your animal</h3>
      <p>
        <label>
          <span>Colour</span>
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
        </label>

      </p>
      <p className="animalSelector">
        <label>
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
                <span>{item.toLowerCase()}</span>
              </label>
            ))
          }
        </label>
      </p>
      {
        isTigerSelected(animals) && (<p>
          <label>
            <span>Type of tiger</span>
            <input
              type="text"
              name="typeOfTiger"
              required
              value={typeOfTiger}
              onChange={handleTypeOfTigerChange}
            />
          </label>
        </p>)
      }
    </div>
  );
}
