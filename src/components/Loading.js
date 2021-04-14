import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const StyledBackdrop = withStyles(() => ({
	root: {
		zIndex: 10,
		color: '#fff',
	},
}))(Backdrop);

function Loading({ open }) {
	return (
		<>
			<StyledBackdrop open={open}>
				<CircularProgress color="primary" />
			</StyledBackdrop>
		</>
	);
}

Loading.propTypes = {
	open: PropTypes.bool.isRequired,
};
export default Loading;
