import { AnimalOptions } from '@/schemas/animalForm';

export const isAnimalSelected = (animal: string, animals: string[]) => (
  animals.includes(animal)
);

export const isTigerSelected = (animals: string[]) => (
  animals.includes(AnimalOptions.TIGER)
);


export const updateSelectedAnimals = (animal: string, selected: boolean, animals: string[]) => {
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
