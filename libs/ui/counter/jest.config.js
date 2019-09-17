module.exports = {
  name: 'ui-counter',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/counter',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
