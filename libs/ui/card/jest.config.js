module.exports = {
  name: 'ui-card',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/card',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
