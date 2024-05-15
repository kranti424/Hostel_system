// const { validationResult } = require('express-validator');
// const Request = require('../models/Request');

// const register = async (req, res) => {
//     const errors = validationResult(req);
//     if(!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() })
//     }
//     try {
//         const { cms_id } = req.body;
//         const request = await Request.findOne({ cms_id });
//         if(request) {
//             return res.status(400).json({ errors: [{ msg: 'Request already exists' }] });
//         }
//         const newRequest = new Request({
//             cms_id
//         });
//         await newRequest.save();
//         res.json(newRequest);
//     } catch(err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// }

// const getAll = async (req, res) => {
//     try {
//         const requests = await Request.find();
//         res.json(requests);
//     } catch(err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// }

// module.exports = {
//     register,
//     getAll
// }

const { validationResult } = require('express-validator');
const Request = require('../models/Request');

const register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        cms_id,
        name,
        contact,
        father,
        dob,
        email,
        address,
        department,
        course,
        branch,
    } = req.body;

    try {
        // Check if the request already exists
        const existingRequest = await Request.findOne({ cms_id  });
        if (existingRequest) {
            return res.status(400).json({ errors: [{ msg: 'Request already exists' }] });
        }

        // Create a new request
        const newRequest = new Request({
            cms_id,
            name,
            contact,
            father,
            dob,
            email,
            address,
            department,
            course,
            branch,
        });

        // Save the new request to the database
        const savedRequest = await newRequest.save();
        res.json(savedRequest);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const getAll = async (req, res) => {
    try {
        const requests = await Request.find();
        res.json(requests);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
    register,
    getAll,
};