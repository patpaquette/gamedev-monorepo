module.exports = {
  name: 'rendering-domain',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/rendering/domain',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
