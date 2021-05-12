import { AnimalOptions } from '@/schemas/animalForm';

export const isAnimalSelected = (animal: AnimalOptions, animals: AnimalOptions[]) => (
  animals.includes(animal)
);



export const updateSelectedAnimals = (animal: AnimalOptions, selected: boolean, animals: AnimalOptions[]) => {
  let res = [...animals];
  if (selected === true) {
    res = [...animals, animal];
  } else {
    const index = res.indexOf(animal);
    if (index > -1) {
      res.splice(index, 1);
    }
  }
  return res;
};
