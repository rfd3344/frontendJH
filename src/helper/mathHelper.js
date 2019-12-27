/**
 * mathematics combination
 * https://en.wikipedia.org/wiki/Combination
 *
 * @param {number} k
 * @param {number} n
 * @returns {number} value or null if value is undefined
 * @example
 *
 * combination(2, 3) = 3  // C(2/3)
 * combination(2, 5) = 10 // C(2/5)
 */

export function combination(n, k) {
	let res = 1;
	let divide = 1;
	for (let i = 1; i <= n; i++) {
		res *= (k - i + 1);
		divide *= i;
	}
	return res / divide;
}
