module.exports = {
  name: 'ui-navigation',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/navigation',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
