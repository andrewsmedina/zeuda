var app = require('express').createServer();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('zeuda');
});

app.listen(3000);

console.log('ZeuDa server running at http://127.0.0.1:3000/');
