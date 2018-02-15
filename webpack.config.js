const path = require('path'),
  NpmInstallPlugin = require('npm-install-webpack-plugin'),
  webpack = require('webpack');

plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
    },
  }),
  new NpmInstallPlugin({
    peerDependencies: true,
  }),
];

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    'main.js': ['./src/index.jsx'],
  },
  output: {
    filename: '[name]',
    path: path.join(__dirname, 'public/dist'),
    publicPath: '/public/dist/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      reducers: path.resolve(__dirname, 'src/reducers'),
      const: path.resolve(__dirname, 'src/const'),
      containers: path.resolve(__dirname, 'src/containers'),
      store: path.resolve(__dirname, 'src/store'),
      components: path.resolve(__dirname, 'src/components'),
      actions: path.resolve(__dirname, 'src/actions'),
      utils: path.resolve(__dirname, 'src/utils'),
      style: path.resolve(__dirname, 'src/scss'),
      types: path.resolve(__dirname, 'src/types'),
    },
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.scss/,
        use: ['style-loader', 'css-loader?modules=false', 'sass-loader'],
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        include: [path.join(__dirname, 'src')],
      },
    ],
  },
};
