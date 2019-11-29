module.exports = {
  name: 'neverquest',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/neverquest',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
