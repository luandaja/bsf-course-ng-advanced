module.exports = {
	name: 'eshop',
	preset: '../../jest.config.js',
	coverageDirectory: '../../coverage/apps/eshop',
	snapshotSerializers: [
		'jest-preset-angular/AngularSnapshotSerializer.js',
		'jest-preset-angular/HTMLCommentSerializer.js'
	]
};
