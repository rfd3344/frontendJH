import { assert } from 'chai';

describe('Package test', function () {
	describe('karma, mocha, chai', function () {
		it('should skip for mocha skip', function () {
			// mocha
			this.skip();
		});

		it('should pass for all chai methods', function () {
			// https://www.chaijs.com/api/assert/
			assert.isTrue(true);
			assert.strictEqual('1234', '1234');
			assert.isAtMost(9999, 10000, 1);
			assert.isAbove(1000, 1);
		});
	});
});
