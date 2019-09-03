module.exports = {
  name: 'ui-layout',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/layout',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
