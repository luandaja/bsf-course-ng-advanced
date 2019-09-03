module.exports = {
  name: 'ui-components-ungrouped',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/ui/components/ungrouped',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
