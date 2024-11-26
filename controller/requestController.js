const Request = require('../models/request');

exports.createRequest = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send({ message: 'Body cannot be empty.' });
        }
        const newRequest = new Request({
            "mobile" : req.body.mobile,
            "email" : req.body.email,
            "amt" : req.body.amt,
            "type" : req.body.type,
            "msg" : req.body.msg,
            "code": req.body.code
        })
        
        await newRequest.save()
        .then((data) => {
            console.log('Request created successfully')
            res.status(200).send(data)
        })
    } catch (error) {
        res.status(500).json({ error: 'Failed to create request', details: error.message });
    }
};

// Get all loan requests
exports.getAllRequests = async (req, res) => {
    try {
        const requests = await Request.find({});
        res.status(200).json(requests);
    } catch (error) {
        console.log("Error occured! Request was not created.")
        res.status(500).send({ message: err.message})
    }
};





