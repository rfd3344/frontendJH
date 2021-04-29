import React from 'react';
import Button from './Button';

let a: number = 10;


export default function Test() {
	const [v, setV] = React.useState<string>('');
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.warn('input')
		setV(e.target.value)
	}
	return (
		<section>
			<Button  name ="aa" />
			<input value={v} onChange={handleInput} />
		</section>
	);
}
