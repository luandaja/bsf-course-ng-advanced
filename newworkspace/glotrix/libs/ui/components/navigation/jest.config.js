module.exports = {
  name: 'ui-components-navigation',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/ui/components/navigation',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
