module.exports = {
  name: 'ui2',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui2',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
