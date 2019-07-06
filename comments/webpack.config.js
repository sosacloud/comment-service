const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: __dirname + '/src/main.js',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ],
   output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  }
};