const mongoose = require('mongoose');

//this actually connects to the db
mongoose.connect('mongodb://localhost/flights', {
  //these options disable warnings
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// shortcut to mongoose.connection object
const db = mongoose.connection;
	
db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});