module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    },{
      test: /\.s?css$/,
      loaders: ["style-loader", "css-loader", "sass-loader"]
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'scss', 'css']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
