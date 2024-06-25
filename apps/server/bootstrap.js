/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const tsconfigPaths = require('tsconfig-paths');
const config = require('./tsconfig.json');

const isProd = process.env.NODE_ENV === 'production';
const baseUrl = isProd ? './dist' : './src';

tsconfigPaths.register({
  baseUrl: baseUrl,
  paths: config.compilerOptions.paths,
});
