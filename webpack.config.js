const {join} = require('path')
var HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:{
        graph:'./deneme.js'
        },
    output:{
        path:join(__dirname, 'bundled'),
        filename:'[name].bundle.js',
    },
    module: {
        rules: [
          { test: /\.html$/, use: 'html-loader' },
          {test: /\.css$/, use: ['style-loader','css-loader']},
          
        ]
      },
      /*plugins:[
          new HtmlWebpackPlugin({
              output:'C:\\Users\\ibrahim eyyüp inan\\Desktop\\git\\grafikMotoru',
              template:'./index.html',
              filename:'index.html',
              chunks:['graph']
          }),
        ]*/
}