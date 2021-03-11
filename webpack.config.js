const args = require('yargs').argv;
const { merge } = require('webpack-merge');

const coreConfig = require('./webpack/config.core.js');
const envConfig = require(`./webpack/config.${args.env}.js`);

module.exports = merge(
  coreConfig,
  envConfig
);