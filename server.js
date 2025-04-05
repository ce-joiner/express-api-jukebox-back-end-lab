const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const logger = require('morgan');
const methodOverride = require('method-override');

const app = express();

const trackRouter = require('./controllers/tracks.js');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use("/tracks", trackRouter);



app.listen(3000, () => {
  console.log('The express app is ready!');
});