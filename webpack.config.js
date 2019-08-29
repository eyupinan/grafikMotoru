const {join} = require('path')
module.exports={
    entry:{
        graph:'./src/grafikMotoru.js'
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
      
}