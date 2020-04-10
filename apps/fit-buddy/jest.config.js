module.exports = {
  name: 'fit-buddy',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/fit-buddy',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
