const path = require('path');
const vueSrc = './src';
module.exports = {
  runtimeCompiler: true,
  css: {
    modules: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/layouts')
      },
      extensions: ['.js', '.vue', '.json', 'png', 'jpg', 'jpeg']
    }
  }
};
