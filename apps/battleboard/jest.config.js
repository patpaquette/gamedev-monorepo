module.exports = {
  name: 'battleboard',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/battleboard',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
