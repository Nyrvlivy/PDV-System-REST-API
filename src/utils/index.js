const generateToken = require("./jwtUtils");
const validateUserCreate = require("./validateUserCreate");
const validateUserUpdate = require("./validateUserUpdate");
const validateProductCreate = require("./validateProductCreate");
const validateProductUpdate = require("./validateProductUpdate");
const validateCustomerCreate = require("./validateCustomerCreate");
const validateCustomerUpdate = require("./validateCustomerUpdate");
const validateOrderCreate = require("./validateOrderCreate");
const verifyIdIsValid = require("./verifyIdIsValid");
const verifyCategoryExists = require("./verifyCategoryExists");
const verifyUserExists = require("./verifyUserExists");
const verifyUserEmailExists = require("./verifyUserEmailExists");
const verifyProductExists = require("./verifyProductExists");
const verifyCustomerExists = require("./verifyCustomerExists");
const verifyCustomerEmailExists = require("./verifyCustomerEmailExists");
const verifyCustomerCPFExists = require("./verifyCustomerCPFExists");

module.exports = {
    generateToken,
    validateUserCreate,
    validateUserUpdate,
    validateProductCreate,
    validateProductUpdate,
    validateCustomerCreate,
    validateCustomerUpdate,
    validateOrderCreate,
    verifyIdIsValid,
    verifyCategoryExists,
    verifyUserExists,
    verifyUserEmailExists,
    verifyProductExists,
    verifyCustomerExists,
    verifyCustomerEmailExists,
    verifyCustomerCPFExists,
};
