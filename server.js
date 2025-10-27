// server.js
const express = require('express');
const connectDB = require('./db');

const app = express();
connectDB();

app.get('/', (req, res) => {
  res.send('Hello MongoDB!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));