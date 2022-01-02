const mongoose = require('mongoose');

module.exports = {
    name: String,
    email: String,
    password: String,
    words: [String],
    recentWords: [String]
};



