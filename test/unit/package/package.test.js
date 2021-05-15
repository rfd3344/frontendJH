import { assert } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';


function TestComp () {
	return (
		<div>
			<h1> test </h1>
			<p> content</p>
		</div>
	)
}


describe('package test', function () {

	it('should pass', () => {
		const wrapper = shallow(<TestComp />);
		// const header1 = wrapper.find('h1');
		// console.warn('rfd header1', header1)
		assert.strictEqual(1 + 2, 3);
	});




});
