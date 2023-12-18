import type { Config } from 'jest';
import path from 'path';

const config: Config = {
  globals: {
    __IS_DEV__: true,
    __API__: '',
  },
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\'
  ],
  moduleDirectories: [
    'node_modules'
  ],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],
  rootDir: '../../',
  modulePaths: [
    '<rootDir>src'
  ],
  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
  ],
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTest.ts'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx')
  },

};

export default config;
