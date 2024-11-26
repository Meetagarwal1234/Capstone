const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    mobile: { 
        type: Number, 
        required: [true, 'Mobile number is mandatory.']
    },
    email: { 
        type: String, 
        required: [true, 'email is mandatory.']
    },
    amt: { 
        type: Number, 
        required: [true, 'Amount of loan to be specified.']
    },
    type: { 
        type: String, 
        required: [true, 'Type of loan to be specified']
    },
    msg: { 
        type: String, 
        required: [true, 'Purpose must be specified.']
    },
    code: { 
        type: String, 
        required: [true, 'Code for the loan is mandatory.']
    }
});

module.exports = mongoose.model('Request', requestSchema);





// const mongoose = require("mongoose");

// const requestsSchema = mongoose.Schema({
//   mobile: {
//     type: Number,
//     required: [true, "request must have users number"],
//   },
//   email: {
//     type: String,
//     required: [true, "request must have users email"],
//   },
//   amt : {
//     type: Number,
//     required: [true, "request must have an amount"],
//   },
//   type: {
//     type: String,
//     require: [true, "request must have its type"]
//   },
//   msg: {
//     type: String,
//     require: [true, "request message required"]
//   },
//   code: {
//     type: String, 
//     require: [true, "request code required"]
//   }
// });

// module.exports = mongoose.model("requests", requestsSchema);