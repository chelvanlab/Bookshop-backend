const mongoose = require('mongoose');
const _ = require('lodash');
const moment = require('moment');
 
const { Purchase } = require('../model/purchase');
const express = require('express');
const router = express.Router();

// Get by account id Details
router.get('/', async (req, res) => {
    let supplier
    purchase = await Purchase.find({
        $and: [
            { ownerId: req.params.ownerId },
        ]
    });
    res.send(purchase)
});


module.exports = router;
