const express = require('express');
const path = require('path');
const app = express();

// 👇 this line is the key: serves everything inside "my-app" folder
app.use('/my-app', express.static(path.join(__dirname, 'my-app')));

app.get('/', (req, res) => {
  res.send('✅ Server is running. Try /my-app/data.txt');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});