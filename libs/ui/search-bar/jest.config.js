module.exports = {
  name: 'ui-search-bar',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/search-bar',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
