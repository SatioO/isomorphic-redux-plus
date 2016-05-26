'use strict';

// Speed things up on the server for libraries that unlike React do not cache `process.env`.
// See https://github.com/facebook/react/issues/812.
process.env = JSON.parse(JSON.stringify(process.env));

require('babel-register')({});

var config = require('./config').default;
var server = require('./server').default;

server.listen(config.port, config.host, function () {
  console.log('Server listening on: ' + config.port);
});
