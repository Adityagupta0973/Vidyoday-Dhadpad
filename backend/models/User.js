const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: function(v) {
                return /\d{10}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    role: {
        type: String,
        enum: ['admin', 'teacher', 'volunteer', 'coordinator'],
        default: 'volunteer'
    },
    schId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'School'
    }]
    ,
    volId: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
    }]
});
module.exports = mongoose.model('User', UserSchema);