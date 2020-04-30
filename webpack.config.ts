import * as webpack from 'webpack';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const env = process.env.NODE_ENV === 'development' ? 'development' : 'production';

const config: webpack.Configuration = {
  mode: env,
  entry: {
    app: './src/index.tsx'
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'QAlfy - A highly secured browsing platform',
      template: './src/index.html',
      cache: false
    }),
    new CopyPlugin([
      {
        from: __dirname + '/assets/favicon',
        to: __dirname + '/dist/assets/favicon'
      },
    ]),
  ],

  // Enable sourcemaps for debugging webpack's output.
  devtool: env === 'development' && 'source-map' || false,

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./assets/fonts/[name].[ext]'
      },
      {
        test: require.resolve('snapsvg'),
        loader: 'imports-loader?this=>window,fix=>module.exports=0'
      }
    ]
  }
};

export default config;
