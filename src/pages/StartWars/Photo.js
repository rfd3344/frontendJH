import React from 'react';
import PropTypes from 'prop-types';

export default function Photo({ owner, imageUrl }) {
	return (
		<div className="photo">
			<h3>{owner}</h3>
			<img src={imageUrl} alt={owner} />
		</div>
	);
}

Photo.propTypes = {
	owner: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
};
