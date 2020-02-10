const app = require('express')();
const bodyParser = require('body-parser');

const { config } = require('./config/index');

const postsApi = require('./routes/posts.js');

postsApi(app);

// app.get('/', function(req, res){
//   res.send('hello world');
// });

// app.get('/json', function(req, res){
//   res.json({hello: 'world'});
// });


// app.get('/json/:id', function(req, res){
//   res.send(`user${req.params.id}`);
// });

// app.post('/bisiesto/:anio', function(req, res){
// 	const { anio } = req.params;
// 	const isOrNot = anio % 4 === 0 && (anio % 400 === 0 || anio % 100 !== 0) ?
// 	  'bisiesto' : 'no bisiesto'
// 		res.send(`el ${anio} es ${isOrNot}`)
// });


app.listen(config.port, function() {
  console.log(`listening http://localhost:${config.port}`);
});