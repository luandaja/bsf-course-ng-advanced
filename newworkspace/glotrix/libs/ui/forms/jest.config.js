module.exports = {
  name: 'ui-forms',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/forms',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
