const mongoose = require('mongoose');

const dbConnect = async () => {
  await mongoose.connect('mongodb://localhost:27017/wordsmith');
}

module.exports = dbConnect;