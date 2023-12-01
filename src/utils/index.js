const generateToken = require("./jwtUtils");
const validateUserCreate = require("./validateUserCreate");
const validateUserUpdate = require("./validateUserUpdate");
const validateProductCreate = require("./validateProductCreate");
const validateCostumerCreate = require("./validateCostumerCreate");
const verifyIfIdValid = require("./verifyIfIdValid");
const verifyCategoryExists = require("./verifyCategoryExists");
const verifyUserExists = require("./verifyUserExists");
const verifyUserEmailExists = require("./verifyUserEmailExists");
const verifyCostumerEmailExists = require("./verifyCostumerEmailExists");
const verifyCostumerCPFExists = require("./verifyCostumerCPFExists");

module.exports = {
    generateToken,
    validateUserCreate,
    validateUserUpdate,
    validateProductCreate,
    validateCostumerCreate,
    verifyIfIdValid,
    verifyCategoryExists,
    verifyUserExists,
    verifyUserEmailExists,
    verifyCostumerEmailExists,
    verifyCostumerCPFExists,
};
