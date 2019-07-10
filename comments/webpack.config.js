const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: __dirname + '/src/main.js',
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
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
  },
  resolve: {
    // extensions: [ '.js', '.vue' ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
      // '@': helpers.root('src')
    }
  }
};