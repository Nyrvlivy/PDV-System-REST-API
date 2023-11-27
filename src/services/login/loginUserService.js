const jwtUtils = require("../../utils");

const loginUserService = {
    async execute(user) {
        const token = jwtUtils.generateToken({ id: user.id });
        return token;
    }
}
module.exports = loginUserService;