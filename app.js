const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

// Middleware for logging using morgan
app.use(morgan('dev'));

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


// Set the view engine to Pug
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');


// Routing to the first view
app.get('/', (req, res) => {
  res.render('view1');
});

// Routing to the second view
app.get('/view2', (req, res) => {
  res.render('view2');
});

// Routing with a form
app.post('/submit', (req, res) => {
  // Log form data to console
  console.log('Received form data:', req.body);

  // Sending  a simple success response
  res.send('Form submitted successfully!');
});

// Routing  with a parameter
app.get('/dynamic/:param', (req, res) => {
  const dynamicParam = req.params.param;
  res.send(`Dynamic parameter: ${dynamicParam}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
