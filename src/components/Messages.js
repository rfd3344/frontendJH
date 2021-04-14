import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';

const StyledChip = withStyles(() => ({
	root: {
		'&:hover': {
			cursor: 'pointer',
		},
	},
}))(Chip);


function Messages({ messages }) {
	const handleDelete = () => {

	};
	return (
		<>
			{ messages.map(item => (
				<StyledChip
					color={isError ? 'secondary': 'primary'}
					label={message}
					onDelete={handleDelete}
				/>
			))}
		</>
	);
}

//
// Loading.propTypes = {
// 	open: PropTypes.bool.isRequired,
// };
export default Messages;
