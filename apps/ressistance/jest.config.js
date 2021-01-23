module.exports = {
  name: 'ressistance',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ressistance',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
