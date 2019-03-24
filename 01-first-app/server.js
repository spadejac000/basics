const http = require('http');

const onRequest = (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello World');
  response.end();
}
lj;lj;ljl;jljl
http.createServer(onRequest).listen(5000);

