const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('Html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/pages/home/index.js',
    favorites: './src/pages/favorites/favorites.js',
    detail: './src/pages/detail/detail.js',
  },
  devtool: false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash].bundle.js',
    publicPath: '/',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../src'),
    },
    historyApiFallback: true,
    open: true,
    compress: true,
    port: 3000,
    liveReload: true,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1, modules: false },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
            configFile: path.resolve(__dirname, 'babel.config.js'),
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'Movie Library Top Gun',
      favicon: path.resolve(__dirname, '../public') + '/images/Logo.svg',
      template: path.resolve(__dirname, '../src') + '/pages/home/index.html',
      chunks: ['index'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Movie Library Top Gun - Favorites',
      favicon: path.resolve(__dirname, '../public') + '/images/Logo.svg',
      template: path.resolve(__dirname, '../src') + '/pages/favorites/favorites.html',
      chunks: ['favorites'],
      filename: 'favorites.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Movie detail',
      favicon: path.resolve(__dirname, '../public') + '/images/Logo.svg',
      template: path.resolve(__dirname, '../src') + '/pages/detail/detail.html',
      chunks: ['detail'],
      filename: 'detail.html',
    }),
  ],
  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      assets: path.resolve(__dirname, '../public'),
    },
  },
}
