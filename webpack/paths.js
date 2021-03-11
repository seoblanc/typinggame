const { join, resolve } = require('path');
const ROOT = resolve(__dirname, '../');
const JS_SRC = join(ROOT, './src/js/');
const CSS_SRC = join(ROOT, './src/css/');
const OUTPUT = join(ROOT, './public/');

module.exports = {
    ROOT,
    JS_SRC,
    CSS_SRC,
    OUTPUT
};