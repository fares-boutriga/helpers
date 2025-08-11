//require the express nodejs module
var express = require('express'),
  //set an instance of express
  app = express();

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

//tell express what to do when the / route is requested
app.get('/', async function (req, res) {
  const max = 5;

  //set the appropriate HTTP header
//   res.setHeader('Content-Type', 'text/html');
  res.write('<h1>This is the response #: ' + 'fff' + '</h1>');

  //send multiple responses to the client
  for (let i = 1; i <= max; i++) {
    await delay(2000);
    res.write('<h1>This is the response #: ' + i + '</h1>');
  }

  //end the response process
  res.end();
});

//wait for a connection
app.listen(5000, function () {
  console.log('The web server is running. Please open http://localhost:5000/ in your browser.');
});