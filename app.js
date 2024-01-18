const express = require('express');
const morgan = require('morgan');
const path = require('path'); // Add this line for path module
const app = express();
const port = 3000;

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/download', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'image.jpg');
  res.download(filePath, 'image.jpg');
});

app.get('/view2', (req, res) => {
  res.render('view2');
});

app.post('/submit', (req, res) => {
  console.log('Received form data:', req.body);
  res.send('Form submitted successfully!');
});

app.get('/dynamic/:param', (req, res) => {
  const dynamicParam = req.params.param;
  res.send(`Dynamic parameter: ${dynamicParam}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
