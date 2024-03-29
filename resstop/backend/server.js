const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log("Server Running");
})

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Connected to Mongodb Atlas");
})

const restaurantsRouter = require('./routes/restaurants');
const commentsRouter = require('./routes/comments');

app.use('/restaurants', restaurantsRouter);
app.use('/comments', commentsRouter);