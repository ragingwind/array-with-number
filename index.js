'use strict';

module.exports = (length, start) => {
// module.exports = length => {
	if (typeof length !== 'number') {
		throw new TypeError(`Expected a number, got ${typeof length}`);
	}

	start = start || 0;

	return Array.apply(null, {length: length}).map(Number.call, i => Number(i) + start);
};
