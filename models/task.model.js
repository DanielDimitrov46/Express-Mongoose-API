const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: String,
    isCompleted:{
        type: Boolean,
        default: false
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
});

const Task = mongoose.model('Task',taskSchema)
module.exports = Task