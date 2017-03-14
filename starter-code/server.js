'use strict';

// DONE! TODO: Initialize your project using NPM to create and populate a package.json file

// DONE! TODO: Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency
const express = require('express');
const app = express();

//if a port has been explicitly declared, use it. If not, default PORT to 3000
const PORT = process.env.PORT || 3000;

// DONE! TODO: Include all of the static resources as an argument to app.use()
app.use(express.static('./public'));

app.get('/', function(request, response) {
  // DONE! TODO: Using the response object, send the index.html file back to the user
  response.sendFile('/public/index.html', {root: '.'});
});

// DONE! TODO: (STRETCH) Write a new route that will handle a request and send the new.html file back to the user
app.get('/new', function(request, response) {
  response.sendFile('/public/new.html', {root: '.'});
});

// STRETCH GOOOOOOAL: send back a 404 error
app.get('*', function(request, response) {
  response.status(404).end('404 error');
});

app.listen(PORT, function() {
  // DONE! TODO: Log to the console a message that lets you know which port your server has started on
  console.log(`Running on port ${PORT}`);
});
