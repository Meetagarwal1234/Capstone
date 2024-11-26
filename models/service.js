const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    type: { 
        type: String, 
        required: [true, 'Type of loan is mandatory.'] 
    },
    code: { 
        type: String, 
        required: [true, 'Code for loan is mandatory.'],
        unique: true
    },
    description: { 
        type: String, 
        required: [true, 'Description for loan is required.']
    },
    imgUrl: { 
        type: String, 
        required: [true, 'Image url is required.']
    },
    detail: { 
        type: Array, 
        required: [true, 'Description is mandatory.']
    }
});

module.exports = mongoose.model('Service', serviceSchema);


// const mongoose = require("mongoose");

// const servicesSchema = mongoose.Schema({
//   type: {
//     type: String,
//     required: [true, "service must have a type"],
//     unique: [true, "service already exists"],
//   },
//   code: {
//     type: String,
//     required: [true, "service must have a service code"],
//     unique: [true, "service already exists"],
//   },
//   description: {
//     type: String,
//     required: [true, "service must have description"],
//   },
//   imgUrl: {
//     type: String,
//   },
//   detail: {
//     type: [String],
//   },
// });

// module.exports = mongoose.model("services", servicesSchema);