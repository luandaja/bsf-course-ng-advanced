module.exports = {
  name: 'ui-spinner',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/spinner',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
