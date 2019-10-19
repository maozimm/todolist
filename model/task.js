const mongoose = require('mongoose');
schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, { versionKey: false });
const Task = mongoose.model('Task', schema);
module.exports = Task;