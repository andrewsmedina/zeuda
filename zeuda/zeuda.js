var app = require('express').createServer();

app.get('/', function(req, res){
    res.send('ZeuDa World');
});

app.listen(3000);

console.log('ZeuDa server running at http://127.0.0.1:3000/');
