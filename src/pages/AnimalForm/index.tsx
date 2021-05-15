import React, { useReducer } from 'react';
import { INITIAL_STATE } from '@/constants/animalForm';
import AnimalFormContext, { animalFormReducer } from './context';
import './style.css';
import Form from './Form';

export default function AnimalForm() {
	const [state, dispatch] = useReducer(animalFormReducer, INITIAL_STATE );

	return (
		<section className="AnimalForm">
			<AnimalFormContext.Provider value={{ state, dispatch }}>
				<h1> Fill out this awesome form </h1>
				<Form />
			</AnimalFormContext.Provider>

		</section>
	);
}
