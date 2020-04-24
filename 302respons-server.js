'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/authorize':
      res.writeHead(302, {
        'Location': 'http://localhost:8989/cb/#id_token=weofsjoe'
      });
      break;
    case '/cb':
      break;
  }
  
  res.end();
});

const port = 8989;
server.listen(port, () => {
  console.info('Listening on ' + port);
});