// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const RequestSchema = new Schema({
//     cms_id: {
//         type: Number,
//         required: true,
//         unique: true
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     }
// });

// module.exports = Request = mongoose.model('request', RequestSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    cms_id: {
        type: Number,
        required: true,
        unique: true,
       
    },
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    father: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Request = mongoose.model('request', RequestSchema);