module.exports = {
  name: 'renderer',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/renderer',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
