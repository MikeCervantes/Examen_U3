const mongoose = require('mongoose');

let fanPageSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String,
    },
    keywords: [{
        type: String
    }],
    comments: [{
        type: String
    }],
    calif: [{
        type: Number
    }]
});

const fanPageModel = mongoose.model('FanPage', fanPageSchema, 'fanPages');

module.exports = fanPageModel;