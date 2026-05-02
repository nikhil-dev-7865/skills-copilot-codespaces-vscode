// Create web server

// synthesizing 9/10 Solution

const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('This is the comments page');
});

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});