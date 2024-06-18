const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required:true
    },
    password: {
        type: 'string',
        required:true
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;