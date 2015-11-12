var express         = require('express');
var port            = process.env.PORT || 3000;
var morgan          = require('morgan');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var app             = express();

// sets the static files location to public
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next) {
    res.render('index.html');
});

app.listen(port);
console.log('App listening on port ' + port);