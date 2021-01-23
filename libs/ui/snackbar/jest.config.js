module.exports = {
  name: 'ui-snackbar',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/snackbar',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
