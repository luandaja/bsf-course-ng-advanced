module.exports = {
  name: 'ui-tables',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/tables',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
