const path = require('path');

module.exports = {
  //...
  module: {
    rules: [
        // {
        //     test: /\.mp4$/,
        //     use: 'file-loader?name=videos/[name].[ext]',
        // },
        {
            test: /\.(mov|mp4)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]'
                }  
              }
            ]
          }
    ],
  },
};