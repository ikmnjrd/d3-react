import express from 'express';
import canvasController from './controllers/canvasController';
import indexController from './controllers/indexController';

const app: express.Express = express();

app.use('/static', express.static('public'));

app.get('/', indexController);
app.get('/canvas', canvasController);

app.listen(process.env.PORT || 3000, function () {
  console.log('express app is started.');
  console.log(__dirname);
});

module.exports = app;