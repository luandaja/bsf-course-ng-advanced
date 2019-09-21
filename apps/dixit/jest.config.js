module.exports = {
  name: 'dixit',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/dixit',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
