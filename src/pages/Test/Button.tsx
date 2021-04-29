import React from 'react';

type IProps = {
	name: string
}

export default function Button({ name } : IProps) {
	const [v, setV] = React.useState('');
	const handleInput = (e: any) => {
		console.warn('input')
		setV(e.target.value)
	}
	console.warn('Button')
	return (
		<section>
			<input value={v} onChange={handleInput} />
			{ name }
		</section>
	);
}
