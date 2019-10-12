module.exports = {
  name: 'ui-poster-card',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/poster-card',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
