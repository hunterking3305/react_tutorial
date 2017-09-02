var path = require('path');

module.exports = {
  context: path.resolve('src'),
  entry:{
    bundle: 'index.jsx',
  },
  output:{
    path: path.resolve('dist'),
    filename: '[name].js'
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
      color: true
    }
  },

  resolve:{
    root: [
      path.resolve('src'),
      path.resolve('src/components'),
      path.resolve('node_modules')
    ],
    extensions:['','.js','.jsx']
  },
  resolveLoader:{
    root: path.resolve('node_modules')
  },

  module:{
    loaders:[{
      test: /\.jsx$/,
      loader: 'babel?presets[]=react',
      include: path.resolve('src')
    },{
      test: /\.scss$/,
      loader: 'style!css!sass',
      include: path.resolve('src')
    },{
      test: /\.html$/,
      loader: 'file?name=[name].html',
      include: path.resolve('src')
    },{
      loader: 'file?name=[path][name].[ext]',
      include: path.resolve('src/img')
    }]
  }

};
