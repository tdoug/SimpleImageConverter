var express = require('express');
var http = require('http');
var path = require('path');
var easyimage = require('easyimage');

var app = express();
app.use(express.multipart());

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.logger());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

///routes

app.get('/',function(req, res){
	res.render('index.jade');
});

app.post('/convert', function(req,res)
{
	easyimage.convert({src:req.files.file.path, dst:'public/converted.png', quality:10}, function(err, stdout, stderr) {
    if (err) throw err;
    ///finished
	});
	easyimage.convert({src:req.files.file.path, dst:'public/converted.gif', quality:10}, function(err, stdout, stderr) {
    if (err) throw err;
    ///finished
	});
	easyimage.convert({src:req.files.file.path, dst:'public/converted.jpeg', quality:10}, function(err, stdout, stderr) {
    if (err) throw err;
    ///finished
	});

	res.send(200);
});

app.get('/results', function(req,res){
	res.render('conversion_done.jade');
});

var server = app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
