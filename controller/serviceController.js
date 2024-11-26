const Service = require('../models/service');

// Route 1: Get all services
exports.getAllServices = async (req, res) => {
    try {
        const services = await Service.find({});
        res.status(200).send(data)
    } catch (error) {
        console.err('Error occured! failed to fetch.')
        res.status(500)
    }
};

// Route 2: Get service details by type
exports.getServiceByType = async (req, res) => {
    try {
        const data = await Service.find({ type: req.params.type });
        res.status(200).send(data)
    } catch (err) {
        console.err('Error occured! Failed to fetch the data.')
        res.status(500).json({ error: 'Failed to fetch the service', details: error.message });
    }
};


// Route 3: Submit request for a specific service type
// not done


