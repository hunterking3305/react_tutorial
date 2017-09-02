var path = require('path');

module.exports = {
  context: path.resolve('src'),
  entry:{
    bundle: 'app.js',
  },
  output:{
    path: path.resolve('dist'),
    filename: '[name].js',
  },

  devtool: 'eval-source-map',
  devServer:{
    stats:{
      hash:         false,
      version:      false,
      timings:      true,
      assets:       true,
      chunks:       false,
      chunkModules: false,
      modules:      false,
      cached:       false,
      reasons:      false,
      source:       false,
      errorDetails: true,
      chunkOrigins: false,
      color: true,
    },
  },

  resolve:{
    modules: [
      path.resolve('src'),
      path.resolve('src/components'),
      path.resolve('node_modules'),
    ],
    extensions:['.js', '.js'],
  },
  resolveLoader:{
    modules: [
      path.resolve('node_modules'),
    ],
  },

  module:{
    rules:[{
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.resolve('src'),
    },{
      test: /\.styl$/,
      loader: 'style-loader!css-loader!stylus-loader',
      include: path.resolve('src'),
    },{
      test: /\.html$/,
      loader: 'file-loader?name=[name].html',
      include: path.resolve('src'),
    },{
      loader: 'file-loader?name=[path][name].[ext]',
      include: path.resolve('src/assets'),
    }],
  },

};
