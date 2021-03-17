import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pickQuantity } from '../../actions/photosSearch';

function QuantityPicker({ pickedQuantity, clickHandler }) {
	return (
		<div id="QuantityPicker">
			{
				[2, 10, 30].map((value) => (
					<label className="form-check form-check-inline" key={value}>
						<input className="form-check-input" type="radio" name="quantityPicker" value={value} onChange={clickHandler} checked={pickedQuantity === value} />
						{value}
					</label>
				))
			}
		</div>
	);
}

const mapStateToProps = (state) => ({
	pickedQuantity: state.photosSearch.pickedQuantity,
});

const mapDispatchToProps = (dispatch) => ({
	clickHandler: (e) => {
		const value = parseInt(e.target.value, 10);
		dispatch(pickQuantity(value));
	},
});

QuantityPicker.propTypes = {
	pickedQuantity: PropTypes.number.isRequired,
	clickHandler: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuantityPicker);
