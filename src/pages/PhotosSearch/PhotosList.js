import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Photo from './Photo';

function PhotosList({ photos }) {
	return (
		<div id="PhotosList">
			{photos.length > 0 && photos.map((photo) => (
				<Photo
					owner={photo.owner}
					key={photo.id}
					imageUrl={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}
				/>
			))}
		</div>
	);
}

const mapStateToProps = (state) => ({
	photos: state.photosSearch.shownPhotos,
});

PhotosList.propTypes = {
	photos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			farm: PropTypes.number.isRequired,
			server: PropTypes.string.isRequired,
			secret: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		}),
	).isRequired,
};

export default connect(mapStateToProps)(PhotosList);
