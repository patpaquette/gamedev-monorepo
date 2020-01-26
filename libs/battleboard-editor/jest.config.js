module.exports = {
  name: 'battleboard-editor',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/battleboard-editor',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
