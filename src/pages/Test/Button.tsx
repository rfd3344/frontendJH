import React from 'react';

type IProps = {
	name: string
}

export default function Button({ name } : IProps) {
	const [v, setV] = React.useState<string>('');
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.warn('input')
		setV(e.target.value)
	}
	console.warn('rfd v', v)
	return (
		<section>
			<input value={v} onChange={handleInput} />
			{ name }
		</section>
	);
}
