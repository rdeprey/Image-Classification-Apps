module.exports = {
  entry: ['react-hot-loader/patch'],
  module: {
    rules: [
      {
        test: /\.example$/i,
        use: 'raw-loader',
      },
    ],
  },
};