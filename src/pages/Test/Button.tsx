import React from 'react';

type IProps = {
	name: string
}

export default function Button({ name } : IProps) {
	const [v, setV] = React.useState<string>('');
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.warn('input', e.target.value)
		setV(e.target.value)
	}
	console.warn('rfd v', v)
	return (
		<section>
			<input value={v} onChange={handleInput}  onBlur={(e)=>console.warn(e.target.value)} />
			{ name }
		</section>
	);
}
