const express = require('express');
const router = express.Router();

const {
    getCustomers,
    createCustomer,
    getCustomer,
    updateCustomer,
    deleteCustomer
} = require('../controllers/customerController');


router.route('/').get(getCustomers).post(createCustomer);

router.route('/:id').get(getCustomer).put(updateCustomer).delete(deleteCustomer);

// // router.route('/').post(createCustomer);

// router.route('/:id').put(updateCustomer);

// router.route('/:id').delete(deleteCustomer);


module.exports = router;