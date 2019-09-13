module.exports = {
  name: 'ui-image-preview',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/image-preview',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
