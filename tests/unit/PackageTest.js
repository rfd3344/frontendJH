import { assert } from 'chai';

describe.only('Package test', function () {
	describe('karma, mocha, chai', function () {
		let instanceNum = 0;
		beforeEach(function () {
			assert.strictEqual(instanceNum, 0);
			instanceNum++;
		});

		afterEach(function () {
			assert.strictEqual(instanceNum, 1);
			instanceNum--;
		});

		it('should pass for all chai methods', function () {
			// https://www.chaijs.com/api/assert/
			assert.isTrue(true);
			assert.strictEqual('1234', '1234');
			assert.isAtMost(9999, 10000, 1);
			assert.isAbove(1000, 1);
		});

		it('should skip for mocha skip', function () {
			this.skip();
		});

		it('mocha skip correctly', function (done) {
			// fail since skip not work
			done();
		});


	});
});
