module.exports = {
  name: 'ui-login',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/login',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
