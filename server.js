import path from 'path';
import express from 'express';
import webpack from 'webpack';
import middleware from './src/middleware';

const app = express();

if (process.env.NODE_ENV === 'development') {
  const config = require('./webpack.config.dev');
  const compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
  app.use(express.static(path.resolve(__dirname, 'src')));
}
else if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'public')));
}

app.get('*', middleware);
let port = process.env.PORT ? process.env.PORT :3000;
app.listen(port || 3000, (err) => {
  if(err) {
    console.error(err);
  } else {
    console.info('Listening at http://localhost:'+port);
  }
});
