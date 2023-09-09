const express = require('express');
const path = require('path');
const mongoose = require('mongoose'); 
// const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://127.0.0.1:27017/user-info', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbConnect = mongoose.connection;

dbConnect.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

dbConnect.once('open', () => {
  console.log('Connected to MongoDB database.');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(routes);

dbConnect.once('open', () => {
    app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
  });