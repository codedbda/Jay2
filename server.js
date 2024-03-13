//import library
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Sabji Wala . com<\n></h1><p>mai hu khan</p>');
});
server.listen(7000, () => {
  console.log(`Server running at 7000`);
});