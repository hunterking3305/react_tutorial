var path = require('path');

module.exports = {
  context: path.resolve('application'),
  entry:{
    demo1: 'demo1.jsx',
	demo2: 'demo2.jsx'
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
      path.resolve('application'),
      path.resolve('application/demo1_component'),
	  path.resolve('application/demo2_component'),
      path.resolve('node_modules'),
    ],
    extensions:['.js', '.jsx'],
  },
  resolveLoader:{
    modules: [
      path.resolve('node_modules'),
    ],
  },

  module:{
    rules:[{
      test: /\.jsx$/,
      loader: 'babel-loader?presets[]=react',
      include: path.resolve('application'),
    },{
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader',
      include: path.resolve('application'),
    },{
      test: /\.html$/,
      loader: 'file-loader?name=[name].html',
      include: path.resolve('application'),
    },{
      loader: 'file-loader?name=[path][name].[ext]',
      include: path.resolve('application/assets'),
    }],
  },

};
