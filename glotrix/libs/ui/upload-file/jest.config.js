module.exports = {
  name: 'ui-upload-file',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/upload-file',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
