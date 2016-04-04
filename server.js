var express = require('express');
var path = require('path');
var app = express();

app.use("/public", express.static(path.join(__dirname, 'public')));

require('./router/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').renderFile);

var server = app.listen(8789, function () {
    console.log('Server is now running on http://localhost:8789');
});