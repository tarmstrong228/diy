//This is the server file, very basic for now. Eventually we need to look into 
//how to move our server onto a separate computer but, for current dev purposes
//we'll just initiate a local server.

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); //cors middleware
app.use(express.json()); //this allows us to parse json

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewURLParse: true, useCreateIndex: true} );
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Database is connected.");
});


app.listen(port, () => {
    console.log('Server is running on port: ${port}');
});