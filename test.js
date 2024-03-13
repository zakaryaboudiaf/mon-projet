const http = require('http');

http.get('http://localhost:3000', (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  
  res.on('end', () => {
    if (data === 'Hello Worl!') {
      console.log('Test passed');
    } else {
      console.log('Test failed');
    }
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
