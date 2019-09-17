module.exports = {
  name: 'ui-gallery',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/gallery',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
