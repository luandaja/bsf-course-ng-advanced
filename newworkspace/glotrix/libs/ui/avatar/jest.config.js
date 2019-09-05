module.exports = {
  name: 'ui-avatar',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/avatar',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
