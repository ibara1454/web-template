import path from 'path';

export default {
  mode: 'development',
  entry: ['./src/js/app.js'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build/js')
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
};
