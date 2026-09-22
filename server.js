const express = require('express');
const path = require('path');

const app = express();

// Render automatically sets process.env.PORT
const PORT = process.env.PORT || 3000;

// 1. Serve the 'img' folder publicly so the browser can access '/img/static.jpg'
app.use('/img', express.static(path.join(__dirname, 'img')));

// 2. Serve the HTML page on the home URL (/)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 3. (Optional) If you want the image to open directly at a URL like /image:
app.get('/image', (req, res) => {
  res.sendFile(path.join(__dirname, 'img', 'static.jpg'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});