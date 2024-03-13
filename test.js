const http = require('http');

http.get('http://localhost:3000', (res) => {
  let data = '';

  // A chunk of data has been received.
  res.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received.
  res.on('end', () => {
    if (data === 'Hello World!') {
      console.log('Test passed');
    } else {
      console.log('Test failed');
    }
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
