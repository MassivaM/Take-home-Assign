const url = require('url');

exports.sampleRequest = function (req, res) {
    const reqUrl = url.parse(req.url, true);
    var value = 'False';
    if (reqUrl.query.value) {
        if (reqUrl.query.value === 'Foo' || reqUrl.query.value === 'Bar') {
            value = 'True'
        }
    }


    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(value);
};

exports.invalidRequest = function (req, res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Invalid Request');
};