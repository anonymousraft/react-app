module.exports={
  entry: __dirname + '/src/index.js',
  module:{
    loaders:[
      {
        test:/\.js/,
        exlude:/node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output:{
     filename:'transformed.js',
     path:__dirname + '/bulid'
  }
};
