import React from 'react';


export default function Button() {
	const [v, setV] = React.useState('');
	const handleInput = () => {
		console.warn('input')
	}
	console.warn('Button')
	return (
		<section>
			<input value={v} onChange={handleInput} />

		</section>
	);
}
