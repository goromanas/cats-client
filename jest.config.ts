export default {
  preset: 'ts-jest',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jest-environment-jsdom'
}
