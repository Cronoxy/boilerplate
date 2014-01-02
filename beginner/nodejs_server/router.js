var handlerFactory = require('./handler');
var fs = require('fs');
var sys = require('sys');
var parser = require('url');
var qs = require('querystring');
var handlers = {};
 
exports.clear = function() {
    handlers = {};
}
 
exports.register = function(url, method) {
    handlers[url] = handlerFactory.createHandler(method);
}
 
exports.route = function(req) {
    url = parser.parse(req.url, true);
    var handler = handlers[url.pathname];
    if (!handler) {
        handler = this.missing(req);
    }
    return handler;
}
 
exports.missing = function(req) {
    console.log('HTTP Method: ' + req.method);
    
    if (req.method == 'GET') {
        return this.processGET(req);
    } else if (req.method == 'OPTIONS') {
        return this.processOPTIONS(req);
    } else if (req.method = 'POST') {
        return this.processPOST(req);
    } else {
        console.log('other HTTP method: ' + req.method);
    }
}

exports.processGET = function(req) {
    // Try to read the file locally
    var url = parser.parse(req.url, true);
    var path = __dirname + url.pathname

    console.log('Route: ' + url.pathname);
    console.log('JSON file to parse: ' + path);

    try {
        data = fs.readFileSync(path);
        mime = req.headers.accepts || 'text/html'
        return handlerFactory.createHandler(function(req, res) {
            res.writeHead(200, {
                'Content-Type': mime,
                'Access-Control-Allow-Origin': '*'
            });
            res.write(data);
            res.end();
        });
    } catch (e) {
        return handlerFactory.createHandler(function(req, res) {
            res.writeHead(404, {
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin': '*'
            });
            res.write('No file with data found for ' + url.pathname);
            res.end();
        });
    }
}

exports.processOPTIONS = function(req) {
    return handlerFactory.createHandler(function(req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
            'Access-Control-Allow-Headers': 'Content-Type'
        });
        res.end();
    });
}

function getNextId(jsonData) {
    var _nextID = 0;
    if (jsonData.length == 0) {
        return _nextID + 1;
    }

    var user = {};
    for (x in jsonData) {
        user = jsonData[x];
        if (typeof user.id !== 'undefined') {
            _nextID = user.id;
        }
    }

    return _nextID + 1;
}

var jsonData = '[]';
var nextID = 0;

exports.processPOST = function(req) {
    // Try to read the file locally
    var url = parser.parse(req.url, true);
    var path = __dirname + url.pathname

    console.log('Route: ' + url.pathname);
    console.log('JSON file to edit: ' + path);

    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            return handlerFactory.createHandler(function(req, res) {
                res.writeHead(404, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin': '*'
                });
                res.write('No file with data found for ' + url.pathname);
                res.write('Error: ' + err);
                res.end();
            });
        }
        
        jsonData = JSON.parse(data);
        nextID = getNextId(jsonData);
    });
    
    // get the POST data  
    var body = '';
    req.on('data', function (data) {
        body += data;
    });
    req.on('end', function () {
        saveUser(JSON.parse(body));
    });

    return handlerFactory.createHandler(function(req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*',
        });
        res.end();
    });
}

function saveUser(user) {
    if (nextID == 0) {
        setTimeout(function () {
            saveUser(user);
        }, 1000);
        return;
    }

    // add the id to the user object to be added
    user.id = nextID;
    jsonData.push(user);
    console.log('Users as JSON: ' + JSON.stringify(jsonData));

    fs.writeFile('users', JSON.stringify(jsonData), function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
});
}
