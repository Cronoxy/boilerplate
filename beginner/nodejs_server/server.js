var sys = require('sys');
var http = require('http');
var router = require('./router');

router.register('/', function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
    });
    res.write('Hello World');
    res.end();
});
 
// We need a server which relies on our router
var server = http.createServer(function (req, res) {
    console.log('Setting the route ...');
    handler = router.route(req);
    console.log('Processing the request ...');
    handler.process(req, res);
});
 
// Start it up
server.listen(8080);
sys.puts('Server running');
