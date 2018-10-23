var express = require('express'),
    app = express(),
    engines = require('consolidate'),       // templating libary adaptor for Express
    bodyParser = require('body-parser'), 
    MongoClient = require('mongodb').MongoClient,
    // The assert module provides a way of testing expressions. 
    // If the expression evaluates to 0, or false, an assertion failure is being caused, and the program is terminated.
    assert = require('assert'),
    url = 'mongodb://localhost:27017';

// register nunjucks, set html as view engine, and specify view location
app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true })); 

// Handler for internal server errors
function errorHandler(err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    res.status(500).render('error_template', { error: err });
}

MongoClient.connect(url, function(err, client) {

    assert.equal(null, err);
    console.log("Successfully connected to server");

    app.get('/', function(req, res) {

        // Find some documents in our collection
        var db = client.db('video')
        db.collection('movies').find({}).toArray(function(err, docs) {

            // Print the documents returned
            docs.forEach(function(doc) {
                console.log(doc.title);
            });

            res.render('movies', { movies : docs });

            // Close the DB
            client.close();
        });
    });
    
    app.get('/name:name', function(req, res, next) {
        var name = req.params.name;
        var getvar1 = req.query.getvar1;
        var getvar2 = req.query.getvar2;
        res.render('hello', { name : name, getvar1 : getvar1, getvar2 : getvar2 });
    });
    
    app.get('/fruits', function(req, res, next) {
        res.render('fruitPicker', { 'fruits' : [ 'apple', 'orange', 'banana', 'peach' ] });
    });
    
    app.post('/favorite_fruit', function(req, res, next) {
        var favorite = req.body.fruit;
        if (typeof favorite == 'undefined') {
            next('Please choose a fruit!');
        }
        else {
            res.send("Your favorite fruit is " + favorite);
        }
    });

    app.use(errorHandler);
    
    var server = app.listen(3000, function() {
        var port = server.address().port;
        console.log('Express server listening on port %s', port);
    });

});





