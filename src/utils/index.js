const generateToken = require("./jwtUtils");
const validateUserCreate = require("./validateUserCreate");
const validateUserUpdate = require("./validateUserUpdate");
const validateProductCreate = require("./validateProductCreate");
const validateProductUpdate = require("./validateProductUpdate");
const validateCostumerCreate = require("./validateCostumerCreate");
const verifyIdIsValid = require("./verifyIdIsValid");
const verifyCategoryExists = require("./verifyCategoryExists");
const verifyUserExists = require("./verifyUserExists");
const verifyUserEmailExists = require("./verifyUserEmailExists");
const verifyProductExists = require("./verifyProductExists");
const verifyCostumerExists = require("./verifyCostumerExists");
const verifyCostumerEmailExists = require("./verifyCostumerEmailExists");
const verifyCostumerCPFExists = require("./verifyCostumerCPFExists");
const validateCostumerUpdate = require("./validateCostumerUpdate");
const verifyIfProductIdExists = require("./verifyIfProductIdExists");

module.exports = {
    generateToken,
    validateUserCreate,
    validateUserUpdate,
    validateProductCreate,
    validateProductUpdate,
    validateCostumerCreate,
    verifyIdIsValid,
    verifyCategoryExists,
    verifyUserExists,
    verifyUserEmailExists,
    verifyProductExists,
    verifyCostumerExists,
    verifyCostumerEmailExists,
    verifyCostumerCPFExists,
    validateCostumerUpdate,
    
    verifyIfProductIdExists,
};
