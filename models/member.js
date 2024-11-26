const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    mobile: { 
        type: Number, 
        required: [true, 'Contact number is mandatory.'],
        unique: true
    },
    email: { 
        type: String, 
        required: [true, 'email is mandatory.'], 
        unique: true
    },
    occupation: { 
        type: String, 
        required: [true, 'Occupation must be specified.']
    },
    createpassword: { 
        type: String, 
        required: [true, 'Password is mandatory.'],
        unique: true
    }
});

module.exports = mongoose.model('Member', memberSchema);





// const mongoose = require("mongoose");

// const membersSchema = mongoose.Schema({
//   mobile: {
//     type: Number,
//     required: [true, "number is required"],
//   },
//   email: {
//     type: String,
//     required: [true, "email is required"],
//   },
//   occupation : {
//     type: Number,
//     required: [true, "occupation is required"],
//   },
//   createpassowrd: {
//     type: String,
//     require: [true, "password is required"]
//   },
// });

// module.exports = mongoose.model("members", membersSchema);