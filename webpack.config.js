// 手动配置如下
module.exports = {
  entry: './js/index.js',
  output: {
      path: __dirname + '/dist',
      filename: 'js/index.js'
  },
  module: {
      rules:[
        {
          test:/\.jpg|png|gif$/,
          use:'url-loader'
        }
      ]
  }
};
