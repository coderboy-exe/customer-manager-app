// Removes the need for try-catch block. 
// Passess all exceptions to errorHandler middleware
const asyncHandler = require('express-async-handler');

//@desc Get all customers
//@route GET /api/v1/customers
//@access public

const getCustomers = asyncHandler (async (req, res) => {
    await res.status(200).json({message: `Gets all customers`});
});

//@desc Create new customer
//@route POST /api/v1/customers
//@access public

const createCustomer = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw Error("All fields are required!");
    }
    res.status(201).json({message: `Creates new customer`});
});

//@desc Get customer by id
//@route GET /api/v1/customers/:id
//@access public

const getCustomer = asyncHandler(async (req, res) => {
    console.log(req.body)
    res.status(200).json({message: `Get customer: ${req.params.id}`});
});

//@desc Create new customer
//@route PUT /api/v1/customers/:id
//@access public

const updateCustomer = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update customer: ${req.params.id}`});
})

//@desc Delete customer by id
//@route PUT /api/v1/customers/:id
//@access public

const deleteCustomer = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete customer: ${req.params.id}`});
});



module.exports = {
    getCustomers,
    createCustomer,
    getCustomer,
    updateCustomer,
    deleteCustomer
}