const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        require: true,
        type: String,
        trim: true,
    },
    email: {
        require: true,
        type: String,
        trim: true,
        validate: {
            validator: (value) => {
                const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                return value.match(re);
            },
            message: "Enter the valid Email address",
        },
    },
    password: {
        required: true,
        type: String,
    },
    address: {
        type: String,
        default: "",
    },
    type: {
        type: String,
        default: 'user',
    },
    //cart
});

const User = mongoose.model("User", userSchema);
module.exports = User;