module.exports = {
  name: 'ui-images-upload',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/images-upload',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
