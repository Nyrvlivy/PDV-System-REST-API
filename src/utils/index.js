const generateToken = require("./jwtUtils");
const validateUserCreate = require("./validateUserCreate");
const validateUserUpdate = require("./validateUserUpdate");
const validateProductCreate = require("./validateProductCreate");
const validateProductUpdate = require("./validateProductUpdate");
const validateCostumerCreate = require("./validateCostumerCreate");
const verifyIfIdValid = require("./verifyIfIdValid");
const verifyCategoryExists = require("./verifyCategoryExists");
const verifyUserExists = require("./verifyUserExists");
const verifyUserEmailExists = require("./verifyUserEmailExists");
const verifyProductExists = require("./verifyProductExists");
const verifyCostumerEmailExists = require("./verifyCostumerEmailExists");
const verifyCostumerCPFExists = require("./verifyCostumerCPFExists");

module.exports = {
    generateToken,
    validateUserCreate,
    validateUserUpdate,
    validateProductCreate,
    validateProductUpdate,
    validateCostumerCreate,
    verifyIfIdValid,
    verifyCategoryExists,
    verifyUserExists,
    verifyUserEmailExists,
    verifyProductExists,
    verifyCostumerEmailExists,
    verifyCostumerCPFExists,
};
