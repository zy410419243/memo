const path = require('path');
const cwd = process.cwd();
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    ninoninoni: path.join(__dirname, '../dist/src'),
    reactBase: ['react', 'react-dom'],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(cwd, 'src/assets'),
        to: path.join(cwd, 'dist/assets'),
      },
      {
        from: path.join(cwd, '.circleci/config.yml'),
        to: path.join(cwd, 'dist/.circleci/config.yml'),
      },
      {
        from: path.join(cwd, 'src/pages/css'),
        to: path.join(cwd, 'dist/src/pages/css'),
      },
    ]),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'initial',
          priority: 2,
          minChunks: 2,
        },
      },
    },
  },
};
