module.exports = {
  name: 'ui-quote',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/quote',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
