module.exports = {
  module: {
    rules: [
      {
        test: /\.example$/i,
        use: 'raw-loader',
      },
    ],
  },
};