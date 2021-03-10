const args = require('yargs').argv;
const { merge } = require('webpack-merge');

const coreConfig = require('./src/webpack/config.core.js');
const envConfig = require(`./src/webpack/config.${args.env}.js`);

module.exports = merge(
  coreConfig,
  envConfig
);