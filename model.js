var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Contact = module.exports = mongoose.model('contact', schema);

module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}