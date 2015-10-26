var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080);
console.log('Server running on port 8080\r\nYou can now navigate to http://localhost:8080/yourfile.html');
